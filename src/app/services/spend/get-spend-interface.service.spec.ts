import { TestBed } from '@angular/core/testing';

import { GetSpendInterfaceService } from './get-spend-interface.service';

describe('GetSpendInterfaceService', () => {
  let service: GetSpendInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSpendInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
