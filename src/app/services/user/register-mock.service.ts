import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RegisterInterfaceService, UserRegister } from './register-interface.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterMockService implements RegisterInterfaceService {

  constructor() { }
  public register(user_to_register: UserRegister): Observable<string> {
    return of("El usuario se ha crado correctamente");
  }
}
