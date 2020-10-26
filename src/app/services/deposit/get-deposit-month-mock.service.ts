import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable, of } from 'rxjs';
import { DateModel } from 'src/app/models/date';
import {GetDepositMonthInterfaceService, Deposit} from './get-deposit-month-interface.service';

@Injectable({
  providedIn: 'root'
})
export class GetDepositMonthMockService implements GetDepositMonthInterfaceService {

  public deposit: Array<Deposit>
  constructor() { 
    this.deposit = [
      {capacity:'Nómina', deposit:1500, date: moment("2020-10-03") , comment:''},
      {capacity:'Apuestas y Juegos', deposit:36, date:moment("2020-10-03") , comment:'Bonoloto'},
      {capacity:'Nómina', deposit:1500, date:moment("2020-11-01") , comment:''},
      {capacity:'Nómina', deposit:1500, date:moment("2020-12-01") , comment:''},
      {capacity:'Nómina', deposit:1500, date:moment("2020-10-01") , comment:'Paga Extra Navidad'},
      {capacity:'Apuestas y Juegos', deposit:15, date:moment("2020-10-26") , comment:'Primitiva'},
      {capacity:'Ingresos Extraordinarios', deposit:6500, date:moment("2020-10-29") , comment:'Venta coche'},

    ]
  }
  public getDepositMonth(date: DateModel): Observable<Deposit[]> {
    return of(this.deposit);
  }
}
