import { Component, OnInit } from '@angular/core';
import {Validators,FormGroup, FormControl } from '@angular/forms';

import {DateModel} from '../../models/date';

import {GetSpendYearService} from '../../services/spend/get-spend-year.service';
import {GetDepositYearService} from '../../services/deposit/get-deposit-year.service';

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

   constructor( private _getDeposit : GetDepositYearService,
                private _getSpend : GetSpendYearService) { 
                this.totalDeposit = 0;
                this.totalSpend = 0;
                this.total = 0;
                this.responseDeposit = new Array();
                this.responseSpend = new Array();
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
