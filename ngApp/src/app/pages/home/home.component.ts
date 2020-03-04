import { Component, OnInit } from '@angular/core';

const PROFILE_PIC1 = 'assets/img/faces/kaci-baum-2.jpg';
const AWARD_IMG_1 = 'assets/icons/awards/coroa.svg';
const PROFILE_PIC2 = 'assets/img/faces/joe-gardner-2.jpg';
const AWARD_IMG_2 = 'assets/icons/awards/calice.svg';
const PROFILE_PIC3 = 'assets/img/faces/ayo-ogunseinde-2.jpg';
const AWARD_IMG_3 = 'assets/icons/awards/espada.svg';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public rankPicture1 = PROFILE_PIC1;
	public awardImg1 = AWARD_IMG_1;
	public rankPicture2 = PROFILE_PIC2;
	public awardImg2 = AWARD_IMG_2;
	public rankPicture3 = PROFILE_PIC3;
	public awardImg3 = AWARD_IMG_3;

	public starIcon = 'assets/icons/star.svg'

	public pontosRank1 = 952;
	public percentRank1 = `${this.pontosPercent(this.pontosRank1)}%`;

	public pontosRank2 = 750;
	public percentRank2 = `${this.pontosPercent(this.pontosRank2)}%`;

	public pontosRank3 = 620;
	public percentRank3 = `${this.pontosPercent(this.pontosRank2)}%`;

	constructor() { }

	ngOnInit() {
	}

	public pontosPercent(pontos: number): number {
		return ((pontos / 1000) * 100);
	}

}
