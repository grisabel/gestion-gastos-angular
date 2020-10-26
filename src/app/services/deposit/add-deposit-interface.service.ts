import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { AddDepositServiceMock } from './add-deposit-mock.service';
import { AddDepositService } from './add-deposit.service';
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
  useClass: environment.mock ? AddDepositServiceMock : AddDepositService,
  deps:[HttpClient,GeneralService]
})
export abstract class AddDepositInterfaceService {

  public abstract addDeposit(deposit: Deposit):Observable<string>;
}

