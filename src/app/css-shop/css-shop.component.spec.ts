import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssShopComponent } from './css-shop.component';

describe('CssShopComponent', () => {
  let component: CssShopComponent;
  let fixture: ComponentFixture<CssShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssShopComponent]
    });
    fixture = TestBed.createComponent(CssShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
