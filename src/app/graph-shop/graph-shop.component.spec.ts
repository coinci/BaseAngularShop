import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphShopComponent } from './graph-shop.component';

describe('GraphShopComponent', () => {
  let component: GraphShopComponent;
  let fixture: ComponentFixture<GraphShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphShopComponent]
    });
    fixture = TestBed.createComponent(GraphShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
