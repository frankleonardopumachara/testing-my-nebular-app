import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalContactsComponent } from './natural-contacts.component';

describe('ContactComponent', () => {
  let component: NaturalContactsComponent;
  let fixture: ComponentFixture<NaturalContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaturalContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
