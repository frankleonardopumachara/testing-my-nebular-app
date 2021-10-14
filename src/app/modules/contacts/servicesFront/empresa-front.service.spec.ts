import { TestBed } from '@angular/core/testing';

import { EmpresaFrontService } from './empresa-front.service';

describe('EmpresaFrontService', () => {
  let service: EmpresaFrontService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpresaFrontService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
