import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {GetDepositMonthService} from '../../services/deposit/get-deposit-month.service';
import {GetSpendMonthService} from '../../services/spend/get-spend-month.service';

import {DateModel} from '../../models/date';

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

  constructor(private _fb: FormBuilder,
              private _getDeposit : GetDepositMonthService,
              private _getSpend : GetSpendMonthService) { 
                this.totalDeposit = 0;
                this.totalSpend = 0;
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
      }
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
