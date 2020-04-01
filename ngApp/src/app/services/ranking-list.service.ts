import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserScore } from '../Model/user-score.model';

@Injectable({
	providedIn: 'root'
})
export class RankingListService {

	private BASE_API = "http://localhost:3000";


	constructor(
		private http: HttpClient
	){}


	public getRankingList(): Observable<Array<UserScore>> {
		let url = this.BASE_API + "/users";
		return this.http.get<Array<UserScore>>(url);
	}
}