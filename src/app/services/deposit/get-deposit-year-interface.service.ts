import { Injectable } from '@angular/core';
import { DateModel } from 'src/app/models/date';
import {Observable} from 'rxjs';
import { Moment } from 'moment';
import { environment } from 'src/environments/environment';
import { GetDepositYearService } from './get-deposit-year.service';
import {GetDepositYearMockService} from './get-deposit-year-mock.service';
import { GeneralService } from '../general.service';
import { HttpClient } from '@angular/common/http';

export interface Deposit{
  capacity:string,
  deposit:number,
  date: Moment,
  comment: string
}
@Injectable({
  providedIn: 'root',
  useClass: environment.mock ? GetDepositYearMockService : GetDepositYearService,
  deps:[HttpClient, GeneralService]
})
export abstract class GetDepositYearInterfaceService {

  public abstract getDepositYear(date:DateModel):Observable<Array<Deposit>>;
}
