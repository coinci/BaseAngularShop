import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormShopComponent } from './form-shop/form-shop.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MaterialShopComponent } from './material-shop/material-shop.component';
import { NgClassShopComponent } from './ng-class-shop/ng-class-shop.component';
import { NgrxShopComponent } from './ngrx-shop/ngrx-shop.component';
import { FormBasicShopComponent } from './form-basic-shop/form-basic-shop.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'ngrx', component: NgrxShopComponent},
  { path: 'ngclassShop', component: NgClassShopComponent},
  { path: 'material', component: MaterialShopComponent},
  { path: 'form', component: FormShopComponent},
  { path: 'formbasic', component: FormBasicShopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
