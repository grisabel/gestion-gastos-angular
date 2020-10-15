import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

import {GeneralService} from '../../general.service';
import {DialogComponent} from '../../../component/dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class CanActivatesGuardService implements CanActivate{

  constructor(private _authService: GeneralService, private _router: Router, public dialog:MatDialog) { }

    canActivate() {
    
        if (!this._authService.getToken()) {
          this.dialog.open(DialogComponent, {
            width: '70%',
            data : {message: 'Para acceder a esta ruta necesitas estar logueado', title: 'Atención!' }
          });
          this._router.navigateByUrl('');
          return false;
        }

        return true;
    }
}
