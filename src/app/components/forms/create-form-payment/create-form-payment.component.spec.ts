import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormPaymentComponent } from './create-form-payment.component';

describe('CreateFormPaymentComponent', () => {
  let component: CreateFormPaymentComponent;
  let fixture: ComponentFixture<CreateFormPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFormPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFormPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
