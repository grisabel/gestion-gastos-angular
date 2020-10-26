import { Injectable } from '@angular/core';
import { DateModel } from 'src/app/models/date';
import {Observable} from 'rxjs';
import { Moment } from 'moment';
import { environment } from 'src/environments/environment';
import { GetSpendYearService } from './get-spend-year.service';
import{GetSpendYearMockService}from './get-spend-year-mock.service';
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
  useClass: environment.mock ? GetSpendYearMockService : GetSpendYearService,
  deps:[HttpClient,GeneralService]
  
})
export abstract class GetSpendYearInterfaceService {

  public abstract getSpendYear(date:DateModel):Observable<Array<Spend>>;
}
