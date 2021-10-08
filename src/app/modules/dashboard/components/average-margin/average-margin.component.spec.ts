import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageMarginComponent } from './average-margin.component';

describe('AverageMarginComponent', () => {
  let component: AverageMarginComponent;
  let fixture: ComponentFixture<AverageMarginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageMarginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageMarginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
