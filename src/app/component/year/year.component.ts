import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {DateModel} from '../../models/date';

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
  
  constructor() { }

  ngOnInit(): void {
  }

}
