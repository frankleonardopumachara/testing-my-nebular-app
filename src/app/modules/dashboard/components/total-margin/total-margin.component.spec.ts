import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalMarginComponent } from './total-margin.component';

describe('TotalMarginComponent', () => {
  let component: TotalMarginComponent;
  let fixture: ComponentFixture<TotalMarginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalMarginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalMarginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
