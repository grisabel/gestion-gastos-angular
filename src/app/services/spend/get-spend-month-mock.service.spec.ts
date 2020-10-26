import { TestBed } from '@angular/core/testing';

import { GetSpendMonthMockService } from './get-spend-month-mock.service';

describe('GetSpendMonthMockService', () => {
  let service: GetSpendMonthMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSpendMonthMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
