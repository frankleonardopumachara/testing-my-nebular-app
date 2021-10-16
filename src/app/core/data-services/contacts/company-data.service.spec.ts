import { TestBed } from '@angular/core/testing';

import { CompanyDataService } from './company-data.service';

describe('EmpresaService', () => {
  let service: CompanyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
