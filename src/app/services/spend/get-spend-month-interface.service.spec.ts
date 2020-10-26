import { TestBed } from '@angular/core/testing';

import { GetSpendMonthInterfaceService } from './get-spend-month-interface.service';

describe('GetSpendMonthInterfaceService', () => {
  let service: GetSpendMonthInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSpendMonthInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
