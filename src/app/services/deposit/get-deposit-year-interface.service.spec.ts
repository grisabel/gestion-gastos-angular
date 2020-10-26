import { TestBed } from '@angular/core/testing';

import { GetDepositYearInterfaceService } from './get-deposit-year-interface.service';

describe('GetDepositYearInterfaceService', () => {
  let service: GetDepositYearInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDepositYearInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
