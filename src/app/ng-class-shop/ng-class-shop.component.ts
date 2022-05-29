import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-shop',
  templateUrl: './ng-class-shop.component.html',
  styleUrls: ['./ng-class-shop.component.scss']
})
export class NgClassShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getStringClass(): string {
    return "btn btn-primary btn-lg";
  }

  getArrayClass(): string[] {
    return [
      'btn',
      'btn-outline-success',
      'btn-lg',
    ]
  }

  getObjectClass(): object {
    return {
      "btn":true,
      "btn-outline-danger": true,
      "btn-outline-success": false,
      "btn-lg":false,
      "btn-sm": true,
    }
  }

  updateClass(): object {
    return {};
  }

}
