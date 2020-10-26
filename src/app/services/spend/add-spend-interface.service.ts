import { Injectable } from '@angular/core';
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
export abstract class AddSpendInterfaceService {

  public abstract addSpend(spend:Spend):Observable<string>;
}
