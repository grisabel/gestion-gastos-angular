import { TestBed } from '@angular/core/testing';

import { AddSpendMockService } from './add-spend-mock.service';

describe('AddSpendMockService', () => {
  let service: AddSpendMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddSpendMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
