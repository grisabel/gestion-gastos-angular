import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import * as moment from 'moment';
import { GetDepositInterfaceService } from 'src/app/services/deposit/get-deposit-interface.service';
import { GetSpendInterfaceService } from 'src/app/services/spend/get-spend-interface.service';
import { environment } from 'src/environments/environment';

import {DateModel} from '../../models/date';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {

  public form:FormGroup;
  public date: DateModel;
  public responseDeposit;
  public totalDeposit:number;
  public responseSpend;
  public totalSpend:number;
  public total:number;

  constructor(private _fb: FormBuilder, 
              private _getDeposit: GetDepositInterfaceService,
              private _getSpend: GetSpendInterfaceService)
    { 
      this.responseDeposit = new Array();
      this.responseSpend = new Array();
      this.totalDeposit = 0;
      this.totalSpend = 0;
      this.total = 0;
    }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(){
    this.form = this._fb.group({
      week: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required]
    });
  }
  public submit(){
    let date = new DateModel(this.form.value.week, this.form.value.month, this.form.value.year);
    this.total = 0;
    this._getDeposit.getDeposit(date).subscribe(
      response=>{
        this.totalDeposit = 0;
        this.responseDeposit = response;
        for(let i=0;i<this.responseDeposit.length;i++){
        this.totalDeposit += this.responseDeposit[i].deposit;
        this.totalDeposit= Math.floor(this.totalDeposit*100)/100
        }
      }, error=>{
          console.log(error);
        }
    );
    this._getSpend.getSpend(date).subscribe(
      response=>{
        this.totalSpend = 0;
        this.responseSpend = response;
        for(let i=0;i<this.responseSpend.length;i++){
          this.totalSpend += this.responseSpend[i].spend;
          this.totalSpend= Math.floor(this.totalSpend*100)/100
          }
          this.total = this.totalDeposit - this.totalSpend;
          this.total= Math.floor(this.total*100)/100
      }, error=>{
        console.log(error);
      }
    );
    if(environment.production){
      for(let i=0; 1< this.responseSpend.length;i++){
        this.responseSpend.date[i] = moment(this.responseSpend.date[i]);
      }
    }
  }
  
}
