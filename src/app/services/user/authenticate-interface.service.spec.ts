import { TestBed } from '@angular/core/testing';

import { AuthenticateInterfaceService } from './authenticate-interface.service';

describe('AuthenticateInterfaceService', () => {
  let service: AuthenticateInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticateInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
