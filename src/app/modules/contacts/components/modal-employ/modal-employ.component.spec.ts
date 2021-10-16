import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEmployComponent } from './modal-employ.component';

describe('ModalEmployComponent', () => {
  let component: ModalEmployComponent;
  let fixture: ComponentFixture<ModalEmployComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEmployComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEmployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
