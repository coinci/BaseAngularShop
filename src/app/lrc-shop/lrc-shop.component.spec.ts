import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrcShopComponent } from './lrc-shop.component';

describe('LrcShopComponent', () => {
  let component: LrcShopComponent;
  let fixture: ComponentFixture<LrcShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LrcShopComponent]
    });
    fixture = TestBed.createComponent(LrcShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
