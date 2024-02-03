import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsShopComponent } from './Rxjs-shop.component';

describe('NgrxShopComponent', () => {
  let component: RxjsShopComponent;
  let fixture: ComponentFixture<RxjsShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
