import { TestBed } from '@angular/core/testing';

import { GetDepositMonthMockService } from './get-deposit-month-mock.service';

describe('GetDepositMonthMockService', () => {
  let service: GetDepositMonthMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDepositMonthMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
