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

    private urlLocalBase = "assets/img/profile_card/"
    private NAME_IMG_LOCAL = "img_card_"
    private TYPE_IMG_LOCAL = ".jfif";


    constructor(
        private http: HttpClient
    ) { }

    public getPhotoCard(url: string = null): Observable<any> {
        if (!url) {
            url = `${this.urlLocalBase}`
        }
        return this.http.get(url, { responseType: 'blob' });
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
