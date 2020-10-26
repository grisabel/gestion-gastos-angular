import { TestBed } from '@angular/core/testing';

import { GetSpendYearMockService } from './get-spend-year-mock.service';

describe('GetSpendYearMockService', () => {
  let service: GetSpendYearMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSpendYearMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
