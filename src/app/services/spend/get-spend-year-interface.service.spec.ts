import { TestBed } from '@angular/core/testing';

import { GetSpendYearInterfaceService } from './get-spend-year-interface.service';

describe('GetSpendYearInterfaceService', () => {
  let service: GetSpendYearInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSpendYearInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
