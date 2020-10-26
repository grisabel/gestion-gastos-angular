import { TestBed } from '@angular/core/testing';

import { RegisterMockService } from './register-mock.service';

describe('RegisterMockService', () => {
  let service: RegisterMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
