import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import {GLOBAL} from '../global';
import {GeneralService} from '../general.service';
import {GetDepositInterfaceService} from './get-deposit-interface.service';
import { Deposit } from './add-deposit-interface.service';

@Injectable({
  providedIn: 'root'
})
export class GetDepositService implements GetDepositInterfaceService{
  public url: String;
  private headers : HttpHeaders;
  private params: HttpParams;

  constructor(
    private _http: HttpClient,
    private _generalServices: GeneralService
  ) {
    this.url = GLOBAL.url;
    
   }
   
   getDeposit(date):Observable<Array<Deposit>>{
    this.headers = new HttpHeaders({'Content-type':'application/json',
    Authorization :'Basic '+this._generalServices.getToken()});
    this.params = new HttpParams().append('week', date.week).append('month', date.month).append('year', date.year);
  
    return this._http.get<Array<Deposit>>(this.url +'ObtenerIngreso', {headers: this.headers, params: this.params});
    }
}
