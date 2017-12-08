import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmComponent } from './../confirm/confirm.component';
import { DialogService } from "ng2-bootstrap-modal";
import { ContentChild } from '@angular/core/src/metadata/di';

import { TestClass } from './testClass';


@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  errorMessage: string;
  products: IProduct[];

  testList: TestClass[];
  testFiltered: TestClass[];

  constructor(private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute, private dialogService: DialogService) { }

  ngOnInit() {

    this.testList = [
      { id: 1, catId: 1, title: 'Lorem-1' },
      { id: 2, catId: 1, title: 'Lorem-2' },
      { id: 3, catId: 2, title: 'Lorem-3' },
      { id: 4, catId: 1, title: 'Lorem-4' },
      { id: 5, catId: 3, title: 'Lorem-5' },
      { id: 6, catId: 3, title: 'Lorem-6' },
      { id: 7, catId: 1, title: 'Lorem-7' },
      { id: 8, catId: 5, title: 'Lorem-8' },
      { id: 9, catId: 1, title: 'Lorem-9' },
      { id: 10, catId: 2, title: 'Lorem-10' }
    ];


    this.activatedRoute.params.subscribe(
      params => {

        let categoryId = params["id"];

        if (categoryId) {

          this.productService.getProductsByCategory(categoryId).subscribe(products => this.products = products, error => this.errorMessage = <any>error)

          let catId = categoryId;
          this.testFiltered = this.testList.filter((testClass: TestClass) => testClass.catId === catId);
          this.testList = this.testFiltered;
          console.log(this.testFiltered);
        }
        // else {
        //   this.productService.getProducts().subscribe(products => this.products = products, error => this.errorMessage = <any>error);
        // }
      }
    );
  }

  showConfirm(item) {
    let disposable = this.dialogService.addDialog(ConfirmComponent, {
      item: item
    })
  }

}
