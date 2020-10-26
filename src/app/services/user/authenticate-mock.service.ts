import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthenticateInterfaceService, Token } from './authenticate-interface.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateMockService implements AuthenticateInterfaceService{

  public token:Token;
  constructor() { 
    this.token ={
      token :'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZjY0NzY4NTQ3OWU2MjJhNDA0ZTljNTMiLCJuYW1lIjoiaXNhYmVsIiwiaWF0IjoxNjAzMzYzODg3LCJleHAiOjE2MDQ1NzcwODd9.7FGhEBQQZkG_cdMSN0SR_sjOqA6cv8X4Znv1TcwFYG4'
    }
  }
  public authenticate(user: User): Observable<Token> {
    return of(this.token);
  }
}
