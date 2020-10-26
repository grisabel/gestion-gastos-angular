import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { DateModel } from 'src/app/models/date';
import { Deposit } from './add-deposit-interface.service';
import { GetDepositInterfaceService } from './get-deposit-interface.service';


@Injectable({
  providedIn: 'root'
})
export class GetDepositMockService implements GetDepositInterfaceService {

  public deposit: Array<Deposit>
  constructor(){

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

  getDeposit(date: DateModel):Observable<Array<Deposit>>{
    return of(this.deposit);
  }
}
