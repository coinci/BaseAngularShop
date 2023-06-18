import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormShopActualComponent } from './form-shop-actual.component';

describe('FormShopActualComponent', () => {
  let component: FormShopActualComponent;
  let fixture: ComponentFixture<FormShopActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormShopActualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormShopActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
