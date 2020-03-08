import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
	//inject singleton instance
	providedIn: 'root'
})
export class UserCompareService {

	// TODO: Headers
	public httpOptions = {
		headers: null
		//headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
		//withCredentials: true
	}

	public allowCors = 'https://cors-anywhere.herokuapp.com/';

	constructor(
		private http: HttpClient
	) { }

	public getPhotoCard(): Observable<any> {
		// this.httpOptions.headers
		// 	.set('Accept', '*/*')
		// 	.set('Access-Control-Allow-Origin', '*')
		// 	.set('Host', 'localhost:4200')
		// 	.set('Sec-Fetch-Dest', 'empty')
		// 	.set('Sec-Fetch-Mode', 'cors')
		// 	.set('Sec-Fetch-Site', 'same-origin')
		// 	.set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36')

		let url = "http://i.pravatar.cc/250";
		//return this.http.get(url, this.httpOptions)
		return this.http.get(url, { responseType: 'blob' });
	}
}
