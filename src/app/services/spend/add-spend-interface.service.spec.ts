import { TestBed } from '@angular/core/testing';

import { AddSpendInterfaceService } from './add-spend-interface.service';

describe('AddSpendInterfaceService', () => {
  let service: AddSpendInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddSpendInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
