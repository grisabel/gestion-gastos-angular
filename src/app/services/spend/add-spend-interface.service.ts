import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddSpendService } from './add-spend.service';
import {AddSpendMockService} from './add-spend-mock.service';
import { HttpClient } from '@angular/common/http';
import { GeneralService } from '../general.service';

export interface Spend{
  capacity:string,
  spend: number,
  date: Date,
  comment: string
}

@Injectable({
  providedIn: 'root',
  useClass: environment.mock ? AddSpendMockService : AddSpendService,
  deps:[HttpClient,GeneralService]
  
})
export abstract class AddSpendInterfaceService {

  public abstract addSpend(spend:Spend):Observable<string>;
}
