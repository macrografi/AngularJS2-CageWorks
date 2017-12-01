import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmComponent } from './../confirm/confirm.component';
import { DialogService } from "ng2-bootstrap-modal";
import { ContentChild } from '@angular/core/src/metadata/di';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  errorMessage: string;
  products: IProduct[];

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private dialogService: DialogService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => this.products = products, error => this.errorMessage = <any>error);
  }

  showConfirm(item) {
    let disposable = this.dialogService.addDialog(ConfirmComponent, {
      item: item
    })
  }

}