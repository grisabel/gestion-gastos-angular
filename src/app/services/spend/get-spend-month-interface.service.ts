import { Injectable } from '@angular/core';
import { DateModel } from 'src/app/models/date';
import {Observable} from 'rxjs';
import { Moment } from 'moment';
import { environment } from 'src/environments/environment';
import { GetSpendMonthService } from './get-spend-month.service';
import {GetSpendMonthMockService} from './get-spend-month-mock.service';
import { HttpClient } from '@angular/common/http';
import { GeneralService } from '../general.service';

export interface Spend{
  capacity:string,
  spend: number,
  date: Moment,
  comment: string
}
@Injectable({
  providedIn: 'root',
  useClass: environment.mock ? GetSpendMonthMockService : GetSpendMonthService,
  deps:[HttpClient, GeneralService]
  
})
export abstract class GetSpendMonthInterfaceService {

  public abstract getSpendMonth(date:DateModel):Observable<Array<Spend>>;
}
