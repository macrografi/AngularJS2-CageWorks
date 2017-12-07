import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ICategory } from './category';

//rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()

export class CategoryService {
    private categoryUrl = "../api/product/category.json";
    constructor(private http: Http) { }


    getCategories(): Observable<ICategory[]> {
        return this.http.get(this.categoryUrl)
            .map((response: Response) => <ICategory[]>response.json())
            .do(data => console.log("Category Listed"))
            .catch(this.handleError);
    }

    getCategory(id: number): Observable<ICategory> {
        return this.getCategories()
            .map((categories: ICategory[]) => categories.find(p => p.categoryId === id));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}