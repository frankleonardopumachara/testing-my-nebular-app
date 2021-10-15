import { TestBed } from '@angular/core/testing';

import { EmployFrontService } from './employ-front.service';

describe('EmployFrontService', () => {
  let service: EmployFrontService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployFrontService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
