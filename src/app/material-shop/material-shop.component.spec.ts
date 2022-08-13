import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialShopComponent } from './material-shop.component';

describe('MaterialShopComponent', () => {
  let component: MaterialShopComponent;
  let fixture: ComponentFixture<MaterialShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
