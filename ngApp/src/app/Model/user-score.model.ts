import { Kpi } from './kpi.model';

export class UserScore {
	name: string;
	nickName: string;
	updatePosition: number;
	position: number;
	scoreKpis: Kpi[];
}