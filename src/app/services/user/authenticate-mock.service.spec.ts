import { TestBed } from '@angular/core/testing';

import { AuthenticateMockService } from './authenticate-mock.service';

describe('AuthenticateMockService', () => {
  let service: AuthenticateMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticateMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
