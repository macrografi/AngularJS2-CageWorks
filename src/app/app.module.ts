import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ProductModule } from './product/product.module';
import { HomeModule } from 'app/home/home.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryService } from './product/category.service';
import {DropdownModule} from "ng2-dropdown";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
    ProductModule,
    HomeModule,
    DropdownModule
  ],
  providers:[
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
