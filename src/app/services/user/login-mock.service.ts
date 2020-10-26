import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user';
import { LoginInterfaceService, ResUser, UserS } from './login-interface.service';

@Injectable({
  providedIn: 'root'
})
export class LoginMockService implements LoginInterfaceService {
  public res: ResUser;
  constructor() { 
    this.res = <ResUser>{
      message:'El usuario se ha logueado correctamente',
      userS: {
        name:"Isabel",
        surname:"García Ruiz",
        email:"isabel@hotmail.com",
        password:""
      }
    }
  }
  public login(user: User): Observable<ResUser> {
    return of(this.res);
  }
}
