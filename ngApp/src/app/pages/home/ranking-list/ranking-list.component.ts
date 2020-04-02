import { Component, OnInit } from '@angular/core';
import { MathUtils } from 'src/app/utils/math.utils';
import { RankingListService } from 'src/app/services/ranking-list.service';
import { UserScore } from 'src/app/Model/user-score.model';
import { UserCompareService } from 'src/app/services/user-compare.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';


@Component({
	selector: 'app-ranking-list',
	templateUrl: './ranking-list.component.html',
	styleUrls: ['./ranking-list.component.scss']
})
export class RankingListComponent implements OnInit {
	
	public userList:UserScore[] = [];
	public starIcon = '../../../assets/icons/star.svg'


	constructor(
		private rankingListServ: RankingListService,
		private userCompareServ: UserCompareService,
		private sanitizer: DomSanitizer
	) { }

	ngOnInit() {
		this.getRankingList();
	}

	public getRankingList(): void {
		this.rankingListServ.getRankingList().subscribe(
			(users) => {					
				this.userList = users;
			}, 
			(error) => {
				console.error(error);
			});
	}

	public getPhoto(user: UserScore) {
		//this.imgLoading = true;

		this.userCompareServ.getPhotoCard().subscribe(
			(res) => {
				let blobImg: any = new Blob([res], { type: 'image/jpeg' });
				let objUrl = window.URL.createObjectURL(blobImg);
				let secureObjUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(objUrl);

				setTimeout(() => {
					user.photoUrl = secureObjUrl;
					//this.imgLoading = false;
				}, 1800);

			},
			(error) => {
				console.error("Error request: ", error);

			},
			() => {
				//terminando a função.
			});
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
}
