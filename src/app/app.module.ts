import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgrxShopComponent } from './ngrx-shop/ngrx-shop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgClassShopComponent } from './ng-class-shop/ng-class-shop.component';
import { MaterialShopComponent } from './material-shop/material-shop.component';
import { FormShopComponent } from './form-shop/form-shop.component';
import { FormBasicShopComponent } from './form-basic-shop/form-basic-shop.component';
import { FormShopActualComponent } from './form-shop-actual/form-shop-actual.component';
import { GraphShopComponent } from './graph-shop/graph-shop.component';
import { NgrxPracticeComponent } from './ngrx-practice/ngrx-practice.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NgrxShopComponent,
    NgClassShopComponent,
    MaterialShopComponent,
    FormShopComponent,
    FormBasicShopComponent,
    FormShopActualComponent,
    GraphShopComponent,
    NgrxPracticeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
