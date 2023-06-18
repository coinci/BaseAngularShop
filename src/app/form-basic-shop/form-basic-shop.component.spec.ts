import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBasicShopComponent } from './form-basic-shop.component';

describe('FormBasicShopComponent', () => {
  let component: FormBasicShopComponent;
  let fixture: ComponentFixture<FormBasicShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBasicShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBasicShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
