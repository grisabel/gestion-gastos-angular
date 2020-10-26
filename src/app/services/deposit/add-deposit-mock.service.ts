import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AddDepositInterfaceService, Deposit} from './add-deposit-interface.service';

@Injectable({
  providedIn: 'root'
})
export class AddDepositServiceMock implements AddDepositInterfaceService {

  public addDeposit(deposit: Deposit): Observable<string> {
    return of('El ingreso se ha guardado correctamente.');
  }
}
