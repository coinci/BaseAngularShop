import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormShopComponent } from './form-shop/form-shop.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MaterialShopComponent } from './material-shop/material-shop.component';
import { NgClassShopComponent } from './ng-class-shop/ng-class-shop.component';
import { RxjsShopComponent } from './Rxjs-shop/Rxjs-shop.component';
import { FormBasicShopComponent } from './form-basic-shop/form-basic-shop.component';
import { GraphShopComponent } from './graph-shop/graph-shop.component';
import { NgrxPracticeComponent } from './ngrx-practice/ngrx-practice.component';
import { CssShopComponent } from './css-shop/css-shop.component';
import { LrcShopComponent } from './lrc-shop/lrc-shop.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'ngrx', component: RxjsShopComponent },
  { path: 'ngclassShop', component: NgClassShopComponent },
  { path: 'material', component: MaterialShopComponent },
  { path: 'form', component: FormShopComponent },
  { path: 'formbasic', component: FormBasicShopComponent },
  { path: 'graphQL', component: GraphShopComponent },
  { path: 'ngrx2', component: NgrxPracticeComponent },
  { path: 'css', component: CssShopComponent },
  { path: 'lrc', component: LrcShopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
