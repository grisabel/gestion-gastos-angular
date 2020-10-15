import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';

import {AddDepositService} from '../../services/deposit/add-deposit.service';
import {AddSpendService} from '../../services/spend/add-spend.service';



@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  public deposit: FormGroup;
  public spend: FormGroup;
  constructor(
    private _fb:FormBuilder,
    private _ingresoServices: AddDepositService,
    private _gastoServices: AddSpendService,
    private _rt: Router,
    public  dialog : MatDialog
  ) {}

  ngOnInit(): void {
    this.formDeposit();
    this.formSpend();
  }
  public aniadirIngreso(){
      /*this.deposit.value.deposit=Math.floor(this.deposit.value.deposit*100)/100*/
      this._ingresoServices.addDeposit(this.deposit.value).subscribe(
        (response:any)=>{
          this.dialog.open(DialogComponent, {
            width: '70%',
            data: {message: 'El ingreso se ha añadido correctamente', title: '' }
          });
    
        },
        error=>{
         console.log(error);
        }
      ); 
  }
  public aniadirGasto(){

     this._gastoServices.addSpend(this.spend.value).subscribe(
        (response:any)=>{
          this.dialog.open(DialogComponent, {
            width: '70%',
            data: {message: 'El gasto se ha añadido correctamente', title: '' }
          });
                this.spend.reset()
               
        },
        error=>{
            console.log(error);
        }
        );
  }
  
  public logOut(){
    this._rt.navigateByUrl('login');
  }

  private formDeposit(){
    this.deposit = this._fb.group({
      capacity: ['',Validators.required],
      deposit: ['',Validators.required],
      date: ['',Validators.required],
      comment: ['', Validators.maxLength(40)],

    })
  }
  private formSpend(){
    this.spend = this._fb.group({
      capacity: ['',Validators.required],
      spend: ['',Validators.required],
      date: ['',Validators.required],
      comment: ['', Validators.maxLength(40)],

    })
  }
  
}
