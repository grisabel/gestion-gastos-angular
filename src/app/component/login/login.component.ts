import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

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
  public form: FormGroup;
  public identity: string;
  public hide: boolean;

  constructor(
    private _loginService: LoginService,
    private _authenticate: AuthenticateService,
    private _generalServices: GeneralService,
    private _fb: FormBuilder,
    public  dialog : MatDialog
  ){
    this.user = new User("","","","",null);
    this.hide= true;
  }
  ngOnInit(){
    this.createForm();
  }
  onSubmit(){
    this.user.email = this.form.value.email;
    this.user.password = this.form.value.password;
    //generar token en caso de que no tenga
    if(!this._generalServices.getToken()){
     this._authenticate.authenticate(this.user).subscribe(
       (response:TokenResponse)=>{
         sessionStorage.setItem('token', response.token)
         this.user.token=response.token;
       }, error =>{
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
           data: {message: 'El correo electrónico no está registrado', title: 'Error!' }
         });
       }
       else if(error.status === 501){
        let dialogRef =  this.dialog.open(DialogComponent, {
          width: '70%',
          data: {message: 'El correo electrónico y la contraseña no se corresponden.', title: 'Error!' }
        });
       }
       else{
        let dialogRef =  this.dialog.open(DialogComponent, {
          width: '70%',
          data: {message: 'Error en el servidor', title: 'Error!' }
        });
       }
       
     });
 }
 createForm(){
  this.form = this._fb.group({
    email: ['', Validators.email],
    password:['', Validators.required]
  });
 }

}
