import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxShopComponent } from './ngrx-shop.component';

describe('NgrxShopComponent', () => {
  let component: NgrxShopComponent;
  let fixture: ComponentFixture<NgrxShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
