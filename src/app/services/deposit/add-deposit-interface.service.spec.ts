import { TestBed } from '@angular/core/testing';

import { AddDepositInterfaceService } from './add-deposit-interface.service';

describe('AddDepositInterfaceService', () => {
  let service: AddDepositInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddDepositInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
