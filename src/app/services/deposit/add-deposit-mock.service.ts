import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AddDepositInterfaceService, Deposit, Message } from './add-deposit-interface.service';

@Injectable({
  providedIn: 'root'
})
export class AddDepositServiceMock implements AddDepositInterfaceService {

  public addDeposit(deposit: Deposit): Observable<Message> {
    let message: Message;
    message.message = 'El ingreso se ha guardado correctamente.';
    return of(message);
  }
}
