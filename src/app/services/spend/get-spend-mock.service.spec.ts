import { TestBed } from '@angular/core/testing';

import { GetSpendMockService } from './get-spend-mock.service';

describe('GetSpendMockService', () => {
  let service: GetSpendMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSpendMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
