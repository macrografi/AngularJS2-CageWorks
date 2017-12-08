import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IProduct } from './products';

//rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()

export class ProductService {
    private productUrl = "../api/product/products.json";

    constructor(private http: Http) { }

    getProductsByCategory(categoryId: number): Observable<IProduct[]> {

        return this.http.get(this.productUrl + "?categoryId=" + categoryId)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log('Category Listed -Activated route id : ' + categoryId ))
            .catch(this.handleError);
    }

    getProducts(): Observable<IProduct[]> {
        return this.http.get(this.productUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log("Products Listed"))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}