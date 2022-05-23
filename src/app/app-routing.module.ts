import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NgrxShopComponent } from './ngrx-shop/ngrx-shop.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'ngrx', component: NgrxShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
