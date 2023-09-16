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

import {MatButtonModule} from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';
import { booksReducer } from '../book-state/books.reducer';
import { collectionReducer } from '../book-state/collection.reducer';
import { StoreModule } from '@ngrx/store';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookListComponent } from './book-list/book-list.component';


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
    NgrxPracticeComponent,
    BookCollectionComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
