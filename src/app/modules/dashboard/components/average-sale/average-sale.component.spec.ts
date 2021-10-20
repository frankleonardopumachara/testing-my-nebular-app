import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageSaleComponent } from './average-sale.component';

describe('AverageSaleComponent', () => {
  let component: AverageSaleComponent;
  let fixture: ComponentFixture<AverageSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
