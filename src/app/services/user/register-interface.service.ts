import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import {RegisterMockService} from './register-mock.service';
import{RegisterService} from './register.service';


export interface UserRegister{
  name: string,
  surname: string,
  email: string,
  password: string,
  password2: string
}
@Injectable({
  providedIn: 'root',
  useClass: environment.mock ? RegisterMockService : RegisterService,
  deps:[HttpClient]
  
})
export abstract class RegisterInterfaceService {

  public abstract register(user_to_register:UserRegister):Observable<string>;
}
