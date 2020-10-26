import { Injectable } from '@angular/core';
import { DateModel } from 'src/app/models/date';
import {Observable} from 'rxjs';
import { Moment } from 'moment';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { GeneralService } from '../general.service';
import{GetSpendMockService} from './get-spend-mock.service';
import {GetSpendService} from './get-spend.service';

export interface Spend{
  capacity:string,
  spend: number,
  date: Moment,
  comment: string
}

@Injectable({
  providedIn: 'root',
  useClass: environment.mock ? GetSpendMockService : GetSpendService,
  deps:[HttpClient,GeneralService]

})
export abstract class GetSpendInterfaceService {

  public abstract getSpend(date:DateModel):Observable<Array<Spend>>;
}
