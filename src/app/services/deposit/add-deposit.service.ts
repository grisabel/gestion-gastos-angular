import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {GLOBAL} from '../global';
import {GeneralService} from '../general.service';
import {AddDepositInterfaceService, Deposit, Message} from './add-deposit-interface.service';


@Injectable({
  providedIn: 'root'
})
export class AddDepositService implements AddDepositInterfaceService {
  public url: String;
  private headers : HttpHeaders;

  constructor(
    private _http: HttpClient,
    private _generalServices: GeneralService
  ) {
    this.url = GLOBAL.url;
   }
   
   addDeposit(deposit:Deposit):Observable<Message>{
    this.headers= new HttpHeaders({'Content-type':'application/json',
    Authorization :'Basic '+this._generalServices.getToken()});
    
    return this._http.post<Message>(this.url +'AniadirIngreso', deposit, {headers: this.headers});
    }
}
