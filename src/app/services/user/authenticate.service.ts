import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GLOBAL} from '../global';
import {AuthenticateInterfaceService, Token} from './authenticate-interface.service';
import { User } from 'src/app/models/user';



@Injectable({
  providedIn: 'root'
})
export class AuthenticateService implements AuthenticateInterfaceService {
  public url: string;
  private headers : HttpHeaders;
  constructor(
    private _http: HttpClient
  ) {
    this.url = GLOBAL.url;
   }

   authenticate(user:User):Observable<Token>{
    this.headers = new HttpHeaders({'Content-Type':'application/json'});
   
    return this._http.post<Token>(this.url +'authenticate', user, {headers: this.headers});
  }
   
}
