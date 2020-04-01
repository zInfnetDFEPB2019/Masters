import { Component, OnInit } from '@angular/core';
import { MathUtils } from 'src/app/utils/math.utils';

export interface UserScore {
	name: string;
	nickName: string;
	updatePosition: number;
	position: number;
	scoreKpis: Kpi[];
}

export interface Kpi {
	title: string;
	iconUrl: string;
	score: number;
	classWrapperName: string;
}


@Component({
	selector: 'app-table-data',
	templateUrl: './table-data.component.html',
	styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {
	
	public userList:UserScore[] = [];
	public starIcon = '../../../assets/icons/star.svg'


	constructor(
	) { }

	ngOnInit() {
		this.userList = this.createList();
	}

	createList(): Array<UserScore> {
		let users:UserScore[] = [];

		for (let i = 0; i < 20; i++) {

			let kpis = [
				this.buildKpi("danger", this.starIcon, "KPI-1"),
				this.buildKpi("success",this.starIcon, "KPI-2"),
				this.buildKpi("info",this.starIcon, "KPI-3"),
				this.buildKpi("warning",this.starIcon, "KPI-4")
			]

			const user: UserScore = {
				name: "Usuario " + i,
				nickName: "@user"+i+"-master",
				position: i +1,
				scoreKpis: kpis,
				updatePosition: MathUtils.getRandomChoice()
			}
			users.push(user);
		}
		console.log(users);
		return users;
	}

	public buildKpi(classWrap:string, icon: string, title: string ): Kpi {
		let item:Kpi = {
			score: MathUtils.getRandom(0, 1000),
			classWrapperName: classWrap,
			iconUrl: icon,
			title: title
		}
		return item;
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
