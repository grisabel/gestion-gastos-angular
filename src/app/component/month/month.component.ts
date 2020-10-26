import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {DateModel} from '../../models/date';
import { GetDepositMonthInterfaceService } from 'src/app/services/deposit/get-deposit-month-interface.service';
import { GetSpendMonthInterfaceService } from 'src/app/services/spend/get-spend-month-interface.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {

  public form: FormGroup;
  public totalDeposit: number;
  public responseDeposit;
  public totalSpend: number;
  public responseSpend;
  public total:number;

  constructor(private _fb: FormBuilder,
              private _getDeposit : GetDepositMonthInterfaceService,
              private _getSpend : GetSpendMonthInterfaceService) { 
                this.totalDeposit = 0;
                this.totalSpend = 0;
                this.total = 0;
                this.responseDeposit = new Array();
                this.responseSpend = new Array();
              }

  ngOnInit(): void {
    this.createForm();
  }

  public submit(){
    let date = new DateModel("",this.form.value.month,this.form.value.year);
    this._getDeposit.getDepositMonth(date).subscribe(
      response=>{
       this.responseDeposit= response;
       this.totalDeposit = 0;
       for(let i=0;i<this.responseDeposit.length;i++){
        this.totalDeposit += this.responseDeposit[i].deposit;
        this.totalDeposit= Math.floor(this.totalDeposit*100)/100
      }
      }, error =>{
        console.log(error)
      }
    );
    this._getSpend.getSpendMonth(date).subscribe(
      response=>{
       this.responseSpend= response;
       this.totalSpend = 0;
       for(let i=0;i<this.responseSpend.length;i++){
        this.totalSpend += this.responseSpend[i].spend;
        this.totalSpend= Math.floor(this.totalSpend*100)/100
      }
        this.total = this.totalDeposit - this.totalSpend;
        this.total= Math.floor(this.total*100)/100
      }, error =>{
        console.log(error)
      }
    );
  }
  private createForm(){
    this.form = this._fb.group({
      month : ['', Validators.required],
      year: ['', Validators.required]
    });
  }
}
