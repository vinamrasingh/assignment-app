import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListCardsComponent } from './product-list-cards.component';

describe('ProductListCardsComponent', () => {
  let component: ProductListCardsComponent;
  let fixture: ComponentFixture<ProductListCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
