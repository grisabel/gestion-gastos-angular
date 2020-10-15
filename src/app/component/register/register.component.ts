import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {RegisterService} from '../../services/user/register.service';
import {Router} from '@angular/router';
import {DialogComponent} from '../dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public  user: FormGroup;
  public hide: boolean;
  public hide2:boolean;



  constructor(
    private _route: Router,
    private _fb: FormBuilder,
    private _registerService: RegisterService,
    public  dialog : MatDialog
  ) {
   this.hide = true;
   this.hide2 = true;
  }

  ngOnInit(): void {
    this.createForm();
  }

  validatePasswords(){
    if(this.user.value.password!='' && this.user.value.password2!=''){
      if(this.user.value.password===this.user.value.password2){
        return true;
      }
      else{
        return false;
      }
    }else{
      return true;
    }
     
    
   } 
  validateEmail(control: AbstractControl){
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let error = null;
    if(emailRegex.test(control.value)){
        return error;
    }else{
        return error = "El email no tiene un formato válido";
    }
  }
  validatePasswordComplex(control: AbstractControl){
    //Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long
    const passwordRegex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
    let error = null;
    if(passwordRegex.test(control.value)){
        return error;
    } 
    else{
        return error = 'La contraseña no es válida';
    }
  }

  handlerSend(){
 
    this._registerService.register(this.user.value).subscribe(
      response=>{
         this.dialog.open(DialogComponent, {
          width: '70%',
          data: {message:'El usuario se ha registrado correctamente', title:""}
             
         });
         
         this._route.navigateByUrl('management')
           
        
        },
        error=>{
            this.dialog.open(DialogComponent, {
             width: '70%',
             data: {message:'El email ya está registrado', title:'Error!'}
           });
          }
        );  
  }

  handlerPassword2(){
    this.hide2 = !this.hide2;
   
  }
  handlerPassword(){
    this.hide= !this.hide;
   
  }
  private createForm(){
    this.user = this._fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.nullValidator]],
      email: ['', [Validators.required, this.validateEmail]],
      password: ['', [Validators.required, this.validatePasswordComplex]],
      password2: ['', [Validators.required]]
    });  
  
  }
 
}
