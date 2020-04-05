import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserScore } from '../models/user-score.model';
import { MathUtils } from '../utils/math.utils';
import { UserDetails } from '../models/user-details.model';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	private BASE_API = "http://localhost:3000";
	private PROFILE_IMG_PATH = "../../assets/img/profile_card/";
	private INCLUDE_PARENT = "_embed=";
	private INCLUDE_CHILDREN = "_expand=";

	// endpoint
	private ENDPOINT_USER_DETAILS = "/usersDetails";
	private ENDPOINT_USER_KPI = "/usersKpi";

	constructor(
		private http: HttpClient
	){}


	public getRankingList(): Observable<Array<UserScore>> {
		let url = this.BASE_API + this.ENDPOINT_USER_KPI;

		return this.http.get<Array<UserScore>>(url);
	}

	public getUserPhoto(): Observable<any> {
		let url = this.genPhotoUrl();
		return this.http.get(url, { responseType: 'blob' });
	}

	private genPhotoUrl(): string {
		let sex = (MathUtils.getRandom(0,10) > 5) ? "woman" : "man";
		let num = MathUtils.getRandom(1,22);

		let url: string = this.PROFILE_IMG_PATH + sex + "/img_card_" + num + ".jpg";

		return url;
	}

	public saveUserDetails(user: UserDetails): Observable<any> {
		let url = this.BASE_API + this.ENDPOINT_USER_DETAILS;
		let body = {user};

		return this.http.post(url, body);
	}

	public getUserDetails(userId: string): Observable<UserDetails> {
		let url = this.BASE_API + this.ENDPOINT_USER_DETAILS + "/" + userId;
		return this.http.get<UserDetails>(url);
	}
}