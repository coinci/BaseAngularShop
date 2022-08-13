import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgrxShopComponent } from './ngrx-shop/ngrx-shop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgClassShopComponent } from './ng-class-shop/ng-class-shop.component';
import { MaterialShopComponent } from './material-shop/material-shop.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NgrxShopComponent,
    NgClassShopComponent,
    MaterialShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
