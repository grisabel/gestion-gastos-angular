import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public email: FormControl;
  public hide: boolean;

  constructor(){
    this.email= new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.hide= true;
  }
  ngOnInit(){
    console.log(this.email)
  }
  validateEmail(email){
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(emailRegex.test(email)){
        return true;
    }else{
        return false;
    }
  }
}
