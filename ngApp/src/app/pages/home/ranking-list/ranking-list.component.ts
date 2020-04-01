import { Component, OnInit } from '@angular/core';
import { MathUtils } from 'src/app/utils/math.utils';
import { RankingListService } from 'src/app/services/ranking-list.service';
import { UserScore } from 'src/app/Model/user-score.model';


@Component({
	selector: 'app-ranking-list',
	templateUrl: './ranking-list.component.html',
	styleUrls: ['./ranking-list.component.scss']
})
export class RankingListComponent implements OnInit {
	
	public userList:UserScore[] = [];
	public starIcon = '../../../assets/icons/star.svg'


	constructor(
		private rankingListServ: RankingListService
	) { }

	ngOnInit() {
		this.getRankingList();
	}

	public getRankingList(): void {
		this.rankingListServ.getRankingList().subscribe(
			(users) => {	
				console.log('GET TODOS OS USUARIOS');
				console.log(users);
				this.userList = users;
			}, 
			(error) => {
				console.error(error);
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

		console.log("pos: " + pos + " updated: " + updatePosition);

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
