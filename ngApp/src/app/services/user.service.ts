import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserScore } from '../models/user-score.model';
import { MathUtils } from '../utils/math.utils';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	private BASE_API = "http://localhost:3000";
	private PROFILE_IMG_PATH = "../../assets/img/profile_card/";

	constructor(
		private http: HttpClient
	){}


	public getRankingList(): Observable<Array<UserScore>> {
		let url = this.BASE_API + "/users";
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

	public saveUserDetails():void {
		
	}

	public getUserDetails(): any {

	}
}