import { Component, OnInit } from '@angular/core';
import { CategoryService } from './product/category.service';
import { ICategory } from 'app/product/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  errorMessage: string;
  categories: ICategory[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories, error => this.errorMessage = <any>error);
  }
}
