import { TestBed } from '@angular/core/testing';

import { GetDepositMockService } from './get-deposit-mock.service';

describe('GetDepositMockService', () => {
  let service: GetDepositMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDepositMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
