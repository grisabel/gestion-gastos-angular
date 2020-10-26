import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';


export interface UserRegister{
  name: string,
  surname: string,
  email: string,
  password: string,
  password2: string
}
@Injectable({
  providedIn: 'root'
})
export abstract class RegisterInterfaceService {

  public abstract register(user_to_register:UserRegister):Observable<string>;
}
