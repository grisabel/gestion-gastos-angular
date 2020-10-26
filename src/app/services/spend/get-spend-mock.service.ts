import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable, of } from 'rxjs';
import { DateModel } from 'src/app/models/date';
import { GetSpendInterfaceService, Spend } from './get-spend-interface.service';

@Injectable({
  providedIn: 'root'
})
export class GetSpendMockService implements GetSpendInterfaceService{

  public spend:Spend[];
  constructor(){
    this.spend =[
      {capacity:'Hipoteca/Alquiler', spend:500, date:moment("2020-11-01"), comment:''},
      {capacity:'Alimentacion', spend:49.69, date:moment("2020-11-03"), comment:'Mercadona'},
      {capacity:'Móvil/Internet/Fijo',spend:83.45,date:moment("2020-11-25"), comment:'40 euros-> Internet; 43.45-> Móvil'},
      {capacity:'Coche',spend:239,date:moment("2020-11-04"), comment:'Letra coche'},
      {capacity:'Apuestas y Juegos',spend:5,date:moment("2020-11-09"), comment:'Primitiva y Bonoloto'},
      {capacity:'Carburantes',spend:38.18,date:moment("2020-11-27"), comment:'Coche Renault'},
      {capacity:'Coche',spend:239,date:moment("2020-12-04"), comment:'Letra coche'},
      {capacity:'Coche',spend:239,date:moment("2020-10-04"), comment:'Letra coche'},
    ]
  }
  public getSpend(date: DateModel):Observable<Spend[]> {
    return of(this.spend);
  }
}
