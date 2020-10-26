import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import{LoginMockService} from './login-mock.service';
import { GeneralService } from '../general.service';

export interface UserS{
  name: String,
  surname: String,
  email: String,
  password: String,
}
export interface ResUser{
  message:string,
  userS:UserS
}
@Injectable({
  providedIn: 'root',
  useClass:environment.mock ? LoginMockService : LoginService,
  deps:[HttpClient, GeneralService]
})
export abstract class LoginInterfaceService {

  public abstract login(user:User):Observable<ResUser>;
}
