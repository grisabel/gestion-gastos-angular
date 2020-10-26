import { TestBed } from '@angular/core/testing';

import { AddDepositMockService } from './add-deposit-mock.service';

describe('AddDepositMockService', () => {
  let service: AddDepositMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddDepositMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
