import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import {GLOBAL} from '../global';
import {GeneralService} from '../general.service';
import {GetDepositYearInterfaceService} from './get-deposit-year-interface.service';
import { DateModel } from 'src/app/models/date';
import { Deposit } from './add-deposit-interface.service';
@Injectable({
  providedIn: 'root'
})
export class GetDepositYearService implements GetDepositYearInterfaceService{
  public url: String;
  private headers : HttpHeaders;
  private params: HttpParams;

  constructor(
    private _http: HttpClient,
    private _generalServices: GeneralService
  ) {
    this.url = GLOBAL.url;
    
   }
   
   getDepositYear(date:DateModel):Observable<Array<Deposit>>{
    this.headers = new HttpHeaders({'Content-type':'application/json',
    Authorization :'Basic '+this._generalServices.getToken()});
    this.params = new HttpParams().append('year', date.year);
  
    return this._http.get<Array<Deposit>>(this.url +'ObtenerIngresoAnio', {headers: this.headers, params: this.params});
    }
}
