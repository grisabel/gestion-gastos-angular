import { Injectable } from '@angular/core';
import { DateModel } from 'src/app/models/date';
import {Observable} from 'rxjs';

export interface Spend{
  capacity:string,
  spend: number,
  date: Date,
  comment: string
}

@Injectable({
  providedIn: 'root'
})
export abstract class GetSpendInterfaceService {

  public abstract getSpend(date:DateModel):Observable<Array<Spend>>;
}
