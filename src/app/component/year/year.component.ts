import { Component, OnInit } from '@angular/core';
import {Validators,FormGroup, FormControl } from '@angular/forms';

import {DateModel} from '../../models/date';

import { GetDepositYearInterfaceService } from 'src/app/services/deposit/get-deposit-year-interface.service';
import { GetSpendYearInterfaceService } from 'src/app/services/spend/get-spend-year-interface.service';
import * as moment from 'moment';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {

  public form: FormGroup;
  public totalDeposit: number;
  public responseDeposit;
  public totalSpend: number;
  public responseSpend;
  public total:number;
  public momentDeposit: Array<moment.Moment>;
  public momentSpend: Array<moment.Moment>;

   constructor( private _getDeposit : GetDepositYearInterfaceService,
                private _getSpend : GetSpendYearInterfaceService) { 
                this.totalDeposit = 0;
                this.totalSpend = 0;
                this.total = 0;
                this.responseDeposit = new Array();
                this.responseSpend = new Array();
                this.momentDeposit = new Array();
                this.momentSpend = new Array();
              }

  ngOnInit(): void {
    this.createform();
  }

  public submit(){
    let date = new DateModel("","",this.form.value.year);

      this._getDeposit.getDepositYear(date).subscribe(
        response=>{
         this.totalDeposit=0;
         this.responseDeposit= response;
         for(let i=0;i<this.responseDeposit.length;i++){
          this.totalDeposit += this.responseDeposit[i].deposit;
          this.totalDeposit= Math.floor(this.totalDeposit*100)/100;
          this.momentDeposit[i] = moment(this.responseDeposit[i].date);
          this.responseDeposit[i].date = this.momentDeposit[i];
        }
        }, error =>{
          console.log(error)
        }
      );
      this._getSpend.getSpendYear(date).subscribe(
        response=>{
         this.responseSpend= response;
         this.totalSpend=0;
         for(let i=0;i<this.responseSpend.length;i++){
          this.totalSpend += this.responseSpend[i].spend;
          this.totalSpend= Math.floor(this.totalSpend*100)/100;
          this.momentSpend[i] = moment(this.responseSpend[i].date);
          this.responseSpend[i].date = this.momentSpend[i];
        }
        this.total = this.totalDeposit - this.totalSpend;
          this.total= Math.floor(this.total*100)/100
        }, error =>{
          console.log(error)
        }
      );
     
    
      
  }
  private createform(){
    this.form = new FormGroup({
      year: new FormControl('', Validators.required)
    })
  }
}
