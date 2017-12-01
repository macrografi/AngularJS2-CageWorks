import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { IProduct } from './../product/products';

export interface ConfirmModel {
    item: IProduct;
}

@Component({
    selector: 'confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.css']
})

export class ConfirmComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
    item: IProduct;
    
    images = ['image1', 'image2', 'image3', 'image4'];
    myImage = this.images[0];
    
    constructor(dialogService: DialogService) {
        super(dialogService);
    }

    confirm() {
        this.result = true;
        this.close();
    }
}