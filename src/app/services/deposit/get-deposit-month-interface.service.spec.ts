import { TestBed } from '@angular/core/testing';

import { GetDepositMonthInterfaceService } from './get-deposit-month-interface.service';

describe('GetDepositMonthInterfaceService', () => {
  let service: GetDepositMonthInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDepositMonthInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
