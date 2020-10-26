import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { AddDepositServiceMock } from './add-deposit-mock.service';
import { AddDepositService } from './add-deposit.service';
import {Observable} from 'rxjs';
export interface Deposit{
  capacity:string,
  deposit:number,
  date: Date,
  comment: string
}
export interface Message{
  message:string
}

@Injectable({
  providedIn: 'root',
  useClass: environment.production
    ? AddDepositService
    : AddDepositServiceMock,
  deps:[HttpClient]
})
export abstract class AddDepositInterfaceService {

  public abstract addDeposit(deposit: Deposit):Observable<Message>;
}

