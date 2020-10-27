import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import{LoginMockService} from './login-mock.service';
import { GeneralService } from '../general.service';

export interface Token{
  token:string;
}
@Injectable({
  providedIn: 'root',
  useClass:environment.mock ? LoginMockService : LoginService,
  deps:[HttpClient, GeneralService]
})
export abstract class LoginInterfaceService {

  public abstract login(user:User):Observable<Token>;
}
