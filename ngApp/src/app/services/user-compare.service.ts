import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
	//inject singleton instance
	providedIn: 'root'
})
export class UserCompareService {

	private url = "http://i.pravatar.cc/250";


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

		//return this.http.get(url, this.httpOptions)
		return this.http.get(this.url, { responseType: 'blob' });
	}



	//

	getBlobThumbnail(): Observable<Blob> {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		});
		return this.http.post<Blob>(this.url,
			{ headers: headers, responseType: 'blob' as 'json' });
	}
}
