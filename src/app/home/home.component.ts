import { Component, OnInit } from '@angular/core';
import { IBanner } from './banners';
import { BannerService } from './banner.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentChild } from '@angular/core/src/metadata/di';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    errorMessage: string;
    banners: IBanner[];

    constructor(private bannerService: BannerService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.bannerService.getBanners().subscribe(banners => this.banners = banners, error => this.errorMessage = <any>error);
      }
    
}