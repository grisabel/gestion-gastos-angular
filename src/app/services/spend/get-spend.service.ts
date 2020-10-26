import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import {GLOBAL} from '../global';
import {GeneralService} from '../general.service';
import {GetSpendInterfaceService, Spend} from './get-spend-interface.service';
import { DateModel } from 'src/app/models/date';


@Injectable({
  providedIn: 'root'
})
export class GetSpendService implements GetSpendInterfaceService{

  public url: String;
  private headers : HttpHeaders;
  private params: HttpParams;

  constructor(
    private _http: HttpClient,
    private _generalServices: GeneralService
  ) {
    this.url = GLOBAL.url;
    
   }
   
   getSpend(date:DateModel):Observable<Array<Spend>>{
    this.headers = new HttpHeaders({'Content-type':'application/json',
    Authorization :'Basic '+this._generalServices.getToken()});
    this.params = new HttpParams().append('week', date.week).append('month', date.month).append('year', date.year);
  
    return this._http.get<Array<Spend>>(this.url +'ObtenerGasto', {headers: this.headers, params: this.params});
    }
}
