import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import {GLOBAL} from '../global';
import {GeneralService} from '../general.service';
import {GetDepositMonthInterfaceService, Deposit} from './get-deposit-month-interface.service';
import { DateModel } from 'src/app/models/date';



@Injectable({
  providedIn: 'root'
})
export class GetDepositMonthService implements GetDepositMonthInterfaceService {
  public url: String;
  private headers : HttpHeaders;
  private params: HttpParams;

  constructor(
    private _http: HttpClient,
    private _generalServices: GeneralService
  ) {
    this.url = GLOBAL.url;
    
   }
   
   getDepositMonth(date:DateModel):Observable<Array<Deposit>>{
    this.headers = new HttpHeaders({'Content-type':'application/json',
    Authorization :'Basic '+this._generalServices.getToken()});
    this.params = new HttpParams().append('month', date.month).append('year', date.year);
  
    return this._http.get<Array<Deposit>>(this.url +'ObtenerIngresoMes', {headers: this.headers, params: this.params});
    }
}
