import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DateModel } from 'src/app/models/date';
import {environment} from '../../../environments/environment';
import { GetDepositService } from './get-deposit.service';
import{GetDepositMockService} from './get-deposit-mock.service';
import {Observable} from 'rxjs';
import { GeneralService } from '../general.service';
import { Moment } from 'moment';


export interface Deposit{
  capacity:string,
  deposit:number,
  date: Moment,
  comment: string
}

@Injectable({
  providedIn: 'root',
  useClass: environment.mock ? GetDepositMockService : GetDepositService,
  deps:[HttpClient, GeneralService]
})
export abstract class GetDepositInterfaceService {

  public abstract getDeposit(date: DateModel):Observable<Array<Deposit>>;
}
