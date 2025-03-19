import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsCustomerComponent } from './reviews-customer.component';

describe('ReviewsCustomerComponent', () => {
  let component: ReviewsCustomerComponent;
  let fixture: ComponentFixture<ReviewsCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewsCustomerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewsCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
