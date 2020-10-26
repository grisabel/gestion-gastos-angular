import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import {GLOBAL} from '../global';
import {RegisterInterfaceService} from './register-interface.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService implements RegisterInterfaceService{
  public url: string;
  private headers : HttpHeaders;

  constructor(
    private _http: HttpClient
  ) {
    this.url = GLOBAL.url;
   }
   register(user_to_register): Observable<string>{

    this.headers = new HttpHeaders({'Content-Type':'application/json'});

    return this._http.post<string>(this.url + 'registro', user_to_register, {headers: this.headers});   
   }

   
   
}
