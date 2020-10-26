import { TestBed } from '@angular/core/testing';

import { GetDepositYearMockService } from './get-deposit-year-mock.service';

describe('GetDepositYearMockService', () => {
  let service: GetDepositYearMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDepositYearMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
