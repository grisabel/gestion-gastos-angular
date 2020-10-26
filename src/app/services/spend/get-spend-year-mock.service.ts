import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DateModel } from 'src/app/models/date';
import { GetSpendYearInterfaceService, Spend } from './get-spend-year-interface.service';

@Injectable({
  providedIn: 'root'
})
export class GetSpendYearMockService implements GetSpendYearInterfaceService {

  public spend:Spend[];
  constructor(){
    this.spend =[
      {capacity:'Hipoteca/Alquiler', spend:500, date:new Date(2020,11,1), comment:''},
      {capacity:'Alimentacion', spend:49.69, date:new Date(2020,11,3), comment:'Mercadona'},
      {capacity:'Móvil/Internet/Fijo',spend:83.45,date:new Date(2020,11,25), comment:'40 euros-> Internet; 43.45-> Móvil'},
      {capacity:'Coche',spend:239,date:new Date(2020,11,4), comment:'Letra coche'},
      {capacity:'Apuestas y Juegos',spend:5,date:new Date(2020,11,9), comment:'Primitiva y Bonoloto'},
      {capacity:'Carburantes',spend:38.18,date:new Date(2020,11,27), comment:'Coche Renault'},
      {capacity:'Coche',spend:239,date:new Date(2020,12,4), comment:'Letra coche'},
      {capacity:'Coche',spend:239,date:new Date(2020,10,4), comment:'Letra coche'},
    ]
  }
  public getSpendYear(date: DateModel): Observable<Spend[]> {
    return of(this.spend)
;  }
}
