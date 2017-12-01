import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from './../confirm/confirm.component';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';

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
            { path: 'products', component: ProductComponent }
        ]),
        BootstrapModalModule.forRoot({ container: document.body })
    ],
    entryComponents: [
        ConfirmComponent
    ],
    providers: [
        ProductService
    ]
})

export class ProductModule {}