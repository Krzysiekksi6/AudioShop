import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemTextComponent } from './product-item-text.component';

describe('ProductItemTextComponent', () => {
  let component: ProductItemTextComponent;
  let fixture: ComponentFixture<ProductItemTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItemTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductItemTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
