import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import {LoginService} from '../../services/user/login.service';
import {AuthenticateService, TokenResponse} from '../../services/user/authenticate.service';
import {GeneralService} from '../../services/general.service';
import {User} from '../../models/user';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;
  public identity: string;
  public email: string;
  public email1: FormControl;
  public hide: boolean;

  constructor(
    private _loginService: LoginService,
    private _authenticate: AuthenticateService,
    private _generalServices: GeneralService,
    public  dialog : MatDialog
  ){
    this.user = new User("","","","","",null);
    this.email1= new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.hide= true;
  }
  ngOnInit(){
  
  }
  validateEmail(email){
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(emailRegex.test(email)){
        return true;
    }else{
        return false;
    }
  }
  onSubmit(){
  
    //generar token en caso de que no tenga
    if(!this._generalServices.getToken()){
     this._authenticate.authenticate(this.user).subscribe(
       (response:TokenResponse)=>{
         sessionStorage.setItem('token', response.token)
         this.user.token=response.token;
       }, error =>{
         console.log(error)

       });
   }
   this._loginService.login(this.user).subscribe( 
     (response:any)  =>{
       this.identity = JSON.stringify(response.userS);
       sessionStorage.setItem('identity', this.identity)
       //this._route.navigateByUrl('')

     },
     error => {
       if(error.status === 404){
        
         let dialogRef =  this.dialog.open(DialogComponent, {
           width: '70%',
           data: 'El correo electrónico no está registrado'
         });
       }
       else if(error.status === 501){
        let dialogRef =  this.dialog.open(DialogComponent, {
          width: '70%',
          data: 'El correo electrónico y la contraseña no se corresponden.'
        });
       }
       else{
        let dialogRef =  this.dialog.open(DialogComponent, {
          width: '70%',
          data: 'Error en el servidor'
        });
       }
       
     });
       

 }

}
