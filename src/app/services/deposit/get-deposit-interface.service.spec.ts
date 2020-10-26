import { TestBed } from '@angular/core/testing';

import { GetDepositInterfaceService } from './get-deposit-interface.service';

describe('GetDepositInterfaceService', () => {
  let service: GetDepositInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDepositInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
