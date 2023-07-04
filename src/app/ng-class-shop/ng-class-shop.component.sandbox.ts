import { sandboxOf } from 'angular-playground';
import { NgClassShopComponent } from './ng-class-shop.component';

export default sandboxOf(NgClassShopComponent)
  .add('default', {
    template: `<app-ng-class-shop></app-ng-class-shop>`
  });
