import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import{AuthenticateMockService} from './authenticate-mock.service';
import { AuthenticateService } from './authenticate.service';

export interface Token{
  token:string;
}
@Injectable({
  providedIn: 'root',
  useClass:environment.mock ? AuthenticateMockService : AuthenticateService,
  deps:[HttpClient]

})
export abstract class AuthenticateInterfaceService {

  public abstract authenticate(user:User):Observable<Token>;
}
