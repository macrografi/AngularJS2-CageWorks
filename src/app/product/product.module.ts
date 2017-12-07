import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from './../confirm/confirm.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';
import { CategoryService } from './category.service';

@NgModule({
    declarations: [
        ProductComponent,
        ConfirmComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        BootstrapModalModule,
        RouterModule.forChild([
            { path: 'products/:id', component: ProductComponent }
        ]),
        BootstrapModalModule.forRoot({ container: document.body }),
        CarouselModule.forRoot()
    ],
    entryComponents: [
        ConfirmComponent
    ],
    providers: [
        ProductService
    ]
})

export class ProductModule { }