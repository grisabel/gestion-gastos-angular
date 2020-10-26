import { Injectable } from '@angular/core';
import { DateModel } from 'src/app/models/date';
import {Observable} from 'rxjs';

export interface Deposit{
  capacity:string,
  deposit:number,
  date: Date,
  comment: string
}
@Injectable({
  providedIn: 'root'
})
export abstract class GetDepositYearInterfaceService {

  public abstract getDepositYear(date:DateModel):Observable<Array<Deposit>>;
}
