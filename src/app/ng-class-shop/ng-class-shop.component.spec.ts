import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassShopComponent } from './ng-class-shop.component';

describe('NgClassShopComponent', () => {
  let component: NgClassShopComponent;
  let fixture: ComponentFixture<NgClassShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgClassShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
