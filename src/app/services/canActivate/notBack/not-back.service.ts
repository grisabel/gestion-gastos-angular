import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {GeneralService} from '../../general.service';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmComponent} from '../../../component/confirm/confirm.component';

@Injectable({
  providedIn: 'root'
})
export class NotBackService {
  private logOut: boolean;

  constructor(private _authService: GeneralService, private _router: Router, public confirm:MatDialog ) {
    this.logOut = false;
  }

    canActivate() {
    
        if (this._authService.getToken()) {
         const dialogRef = this.confirm.open(ConfirmComponent, {
            width: '70%',
            data: {message: 'Si pulsas SALIR, perderás la sesión actual', title: 'Atención!' }
          });
          dialogRef.afterClosed().subscribe(dialogResult => {
            this.logOut = dialogResult;
            if(this.logOut){
              sessionStorage.clear()
              this._router.navigateByUrl('login');
              return true;
            }
            else{
              return false;
            }
          }); 
        }else{
          return true;
        }

        
    }
}
