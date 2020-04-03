import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RankingListComponent } from './ranking-list/ranking-list.component';
import { Kpi } from 'src/app/Model/kpi.model';
import { UserScore } from 'src/app/Model/user-score.model';
import { UserTopChampion } from 'src/app/Model/user-top-champion.model';
import { Observable } from 'rxjs';
import { ContantsUtils } from 'src/app/utils/contants.utils';

const PROFILE_PIC1 = '../../assets/img/faces/kaci-baum-2.jpg';
const AWARD_IMG_1 = '../../assets/icons/awards/coroa.svg';
const PROFILE_PIC2 = '../../assets/img/faces/joe-gardner-2.jpg';
const AWARD_IMG_2 = '../../assets/icons/awards/calice.svg';
const PROFILE_PIC3 = '../../assets/img/faces/ayo-ogunseinde-2.jpg';
const AWARD_IMG_3 = '../../assets/icons/awards/espada.svg';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
	
	public starIcon = '../../assets/icons/star.svg'
	
	public userTop1: UserTopChampion = new UserTopChampion();
	public rankPicture1 = PROFILE_PIC1;
	public awardImg1 = AWARD_IMG_1;
	public pontosRank1 = 952;
	public percentRank1 = `${this.pontosPercent(this.pontosRank1)}%`;
	
	public userTop2: UserTopChampion = new UserTopChampion();
	public rankPicture2 = PROFILE_PIC2;
	public awardImg2 = AWARD_IMG_2;
	public pontosRank2 = 750;
	public percentRank2 = `${this.pontosPercent(this.pontosRank2)}%`;
	
	public userTop3: UserTopChampion = new UserTopChampion();
	public rankPicture3 = PROFILE_PIC3;
	public awardImg3 = AWARD_IMG_3;
	public pontosRank3 = 610;
	public percentRank3 = `${this.pontosPercent(this.pontosRank3)}%`;

	public colorGreenUp = "rgb(68, 234, 95)";
	public colorRedDown = "red";
	
	@ViewChild("rankingListTag") rankingList: RankingListComponent;

	constructor() { }
	
	ngOnInit() {		
	}
	
	ngAfterViewInit(): void {
		
	}

	public pontosPercent(pontos: number): number {
		return ((pontos / 1000) * 100);
	}

	public viewProfile(): void {

	}

	changeKpi(kpiIndex: number):void {
		this.rankingList.sortRankingListByKpi(kpiIndex);
	}	

	public getPhotoOrDefault(photoUrl: any) {		
		return (photoUrl) ? photoUrl : ContantsUtils.IMG.user_default;
	}
}
