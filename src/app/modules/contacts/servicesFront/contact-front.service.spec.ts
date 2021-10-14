import { TestBed } from '@angular/core/testing';

import { ContactFrontService } from './contact-front.service';

describe('ContactFrontService', () => {
  let service: ContactFrontService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactFrontService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
