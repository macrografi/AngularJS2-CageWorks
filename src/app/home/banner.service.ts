import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IBanner } from './banners';

//rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()

export class BannerService {
    private bannerUrl = "../api/home/banners.json";

    constructor(private http: Http) { }

    getBanners(): Observable<IBanner[]> {
        return this.http.get(this.bannerUrl)
            .map((response: Response) => <IBanner[]>response.json())
            .do(data => console.log("Banner Listed"))
            .catch(this.handleError);
    }

    getBanner(id: number): Observable<IBanner> {
        return this.getBanners()
            .map((banners: IBanner[]) => banners.find(p => p.Id === id));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}