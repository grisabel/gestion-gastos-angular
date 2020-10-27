import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GLOBAL} from '../global';
import {GeneralService} from '../general.service';
import {LoginInterfaceService, Token} from './login-interface.service';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements LoginInterfaceService{
  public url: string;
  private headers : HttpHeaders;
 

  constructor(
    private _http: HttpClient,
    private _generalServices: GeneralService
  ) {
    this.url = GLOBAL.url;
   }

   login(user:User):Observable<Token>{
    this.headers= new HttpHeaders({'Content-type':'application/json',
    Authorization :'Basic '+ this._generalServices.getToken()});
    return this._http.post<Token>(this.url +'login', user, {headers: this.headers});
    }
   
}
