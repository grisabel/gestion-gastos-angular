import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import {GLOBAL} from '../global';
import {GeneralService} from '../general.service';
import {GetSpendMonthInterfaceService, Spend} from './get-spend-month-interface.service';
import { DateModel } from 'src/app/models/date';


@Injectable({
  providedIn: 'root'
})
export class GetSpendMonthService implements GetSpendMonthInterfaceService {

  public url: String;
  private headers : HttpHeaders;
  private params: HttpParams;

  constructor(
    private _http: HttpClient,
    private _generalServices: GeneralService
  ) {
    this.url = GLOBAL.url;
    
   }
   
   getSpendMonth(date:DateModel):Observable<Spend[]>{
    this.headers = new HttpHeaders({'Content-type':'application/json',
    Authorization :'Basic '+this._generalServices.getToken()});
    this.params = new HttpParams().append('month', date.month).append('year', date.year);
  
    return this._http.get<Spend[]>(this.url +'ObtenerGastoMes', {headers: this.headers, params: this.params});
    }
}