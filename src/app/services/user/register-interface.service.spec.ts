import { TestBed } from '@angular/core/testing';

import { RegisterInterfaceService } from './register-interface.service';

describe('RegisterInterfaceService', () => {
  let service: RegisterInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
