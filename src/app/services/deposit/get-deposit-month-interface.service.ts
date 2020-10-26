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
  providedIn: 'root',
  // useClass: environment.production
  //   ? AddDepositService
  //   : AddDepositServiceMock,
  // deps:[HttpClient]
})
export abstract class GetDepositMonthInterfaceService {

  public abstract getDepositMonth(date:DateModel):Observable<Array<Deposit>>;
}
