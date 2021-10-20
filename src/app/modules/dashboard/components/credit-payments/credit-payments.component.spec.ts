import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditPaymentsComponent } from './credit-payments.component';

describe('CreditPaymentsComponent', () => {
  let component: CreditPaymentsComponent;
  let fixture: ComponentFixture<CreditPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
