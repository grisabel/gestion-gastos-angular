import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AddSpendInterfaceService, Spend } from './add-spend-interface.service';

@Injectable({
  providedIn: 'root'
})
export class AddSpendMockService implements AddSpendInterfaceService {
  
  public addSpend(spend: Spend): Observable<string> {
    return of('El gasto se ha guardado correctamente');
  }
}
