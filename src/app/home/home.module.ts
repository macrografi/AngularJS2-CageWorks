import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeComponent } from './home.component';
import { BannerService } from './banner.service';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            { path: 'home', component: HomeComponent }
        ]),
        CarouselModule.forRoot()
    ],
    providers: [
        BannerService
    ]
})

export class HomeModule{}