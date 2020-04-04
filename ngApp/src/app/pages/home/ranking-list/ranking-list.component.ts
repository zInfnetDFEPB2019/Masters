import { Component, OnInit, Input } from '@angular/core';
import { MathUtils } from 'src/app/utils/math.utils';
import { RankingListService } from 'src/app/services/ranking-list.service';
import { UserScore } from 'src/app/Model/user-score.model';
import { UserCompareService } from 'src/app/services/user-compare.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { CollectionsUtils } from 'src/app/utils/collections.utils';
import { UserTopChampion } from 'src/app/Model/user-top-champion.model';

const PROFILE_PIC_DEFAULT = '../../../assets/img/profile_card/default.jpg';

@Component({
	selector: 'app-ranking-list',
	templateUrl: './ranking-list.component.html',
	styleUrls: ['./ranking-list.component.scss']
})
export class RankingListComponent implements OnInit {
	
	public user_default = PROFILE_PIC_DEFAULT;

	public userList:UserScore[] = [];
	public starIcon = '../../../assets/icons/star.svg'
	public onUpdatingList: boolean = false;

	@Input('top1') ChampionTop1: UserTopChampion;
	@Input('top2') ChampionTop2: UserTopChampion;
	@Input('top3') ChampionTop3: UserTopChampion;

	constructor(
		private rankingListServ: RankingListService,
		private sanitizer: DomSanitizer
	) { }

	ngOnInit() {
		this.getRankingList();
	}

	public getRankingList(): void {
		this.rankingListServ.getRankingList().subscribe(
			(users) => {					
				this.userList = users.map((user) => Object.assign( new UserScore(), user));
				this.userList.map((user: UserScore) => {
					this.getPhoto(user);
				});

				this.sortRankingListByKpi();				
			}, 
			(error) => {
				console.error(error);
				this.onUpdatingList = false;
			});
	}

	public getPhoto(user: UserScore) {
		//this.imgLoading = true;
		if (user.isChampion()) this.getChampionByPosition(user.position).isUpdating = true;
			
		this.rankingListServ.getUserPhoto().subscribe(
			(res) => {
				let blobImg: any = new Blob([res], { type: 'image/jpeg' });
				let objUrl = window.URL.createObjectURL(blobImg);
				let secureObjUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(objUrl);

				setTimeout(() => {						
					user.photoUrl = secureObjUrl;							
					if (user.isChampion()) {
						let champ = this.getChampionByPosition(user.position)
						champ.isUpdating = false;
						champ.photoUrl = secureObjUrl;
						console.log(champ);
					}
				}, 5000);
				
			},
			(error) => {
				console.error("Error request: ", error);
			},
			() => {
				//terminando a função.
			});
	}

	public getPhotoOrDefault(photoUrl: any) {		
		return (photoUrl) ? photoUrl : this.user_default;
	}

	public getColorIcon(pos: number, updated: number):string {
		let notUpdate = "lightblue";
		let toUp = "green";
		let toDown = "red";

		if(pos == 1 && updated > 0) return toUp;
		if(pos == 1 && updated == 0) return notUpdate;

		return (updated > 0) ? toUp
							: (updated < 0) ? toDown
							: notUpdate;
	}

	public getClassPositionIcon(pos: number, updatePosition: number): string {
		let notUpdate = "fa-square";
		let toUp = "fa-caret-up";
		let toDown = "fa-caret-down";

		if(pos == 1 && updatePosition > 0) return toUp;
		if(pos == 1 && updatePosition == 0) return notUpdate;

		let classStr = (updatePosition > 0) ? toUp
			: (updatePosition < 0) ?  toDown
			: notUpdate;

		return classStr;
	}

	viewProfile() {
		alert('Funciona!');
	}

	public sortRankingListByKpi(kpiIndex?: number): void {
		kpiIndex = (kpiIndex) ? kpiIndex : 0;

		let usersKpiUpdated: Array<UserScore> = this.userList.map((user) => {
			user.kpiActiveIndex = kpiIndex;
			return user;
		});
		usersKpiUpdated = usersKpiUpdated.sort(CollectionsUtils.sortUsersToRankingListDesc);

		//update positions
		this.userList = usersKpiUpdated.map((user, i) => {
			user.position = i + 1;
			return user;			
		})

		this.refreshChampions();
	}

	public getChampionByPosition(position: number): UserTopChampion {		
		return (position == 1) ? this.ChampionTop1
				: (position == 2) ? this.ChampionTop2
					: this.ChampionTop3;
	}

	public refreshChampions(): void {
		let championsUpdated = this.userList.filter((user) => user.position < 4);
		championsUpdated.forEach((user) => this.updateChampion(user, this.getChampionByPosition(user.position)))
	}

	updateChampion(userData: UserScore, userTarget: UserTopChampion): void {	
		if(!userTarget.isUpdating && userTarget.photoUrl) {
			userTarget.photoUrl = userData.photoUrl;
		}	
		userTarget.position = userData.position;
		userTarget.scoreKpi = userData.scoreKpis[userData.kpiActiveIndex].score;
	}
}
