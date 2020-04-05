import { Kpi } from './kpi.model';

export class UserScore {
	name: string;
	nickName: string;
	updatePosition: number;
	position: number;
	photoUrl: any;
	kpiActiveIndex: number;	
	scoreKpis: Kpi[];

	isChampion() {
		return (this.position < 4);
	}
}