import { Injectable } from '@angular/core';
import { DateModel } from 'src/app/models/date';
import {Observable} from 'rxjs';
import { Moment } from 'moment';
import { environment } from 'src/environments/environment';
import { GetDepositMonthService } from './get-deposit-month.service';
import {GetDepositMonthMockService} from './get-deposit-month-mock.service';
import { HttpClient } from '@angular/common/http';
import { GeneralService } from '../general.service';

export interface Deposit{
  capacity:string,
  deposit:number,
  date: Moment,
  comment: string
}
@Injectable({
  providedIn: 'root',
  useClass: environment.mock ? GetDepositMonthMockService: GetDepositMonthService,
  deps:[HttpClient,GeneralService]
})
export abstract class GetDepositMonthInterfaceService {

  public abstract getDepositMonth(date:DateModel):Observable<Array<Deposit>>;
}
