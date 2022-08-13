import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MaterialShopComponent } from './material-shop/material-shop.component';
import { NgClassShopComponent } from './ng-class-shop/ng-class-shop.component';
import { NgrxShopComponent } from './ngrx-shop/ngrx-shop.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'ngrx', component: NgrxShopComponent},
  { path: 'ngclassShop', component: NgClassShopComponent},
  { path: 'material', component: MaterialShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
