import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

// import {AuthenticateInterfaceService, Token} from '../../services/user/authenticate-interface.service';
import{LoginInterfaceService} from '../../services/user/login-interface.service';
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
  public hide: boolean;

  constructor(
    private _loginService: LoginInterfaceService,
    // private _authenticate: AuthenticateInterfaceService,
    private _fb: FormBuilder,
    private _route: Router,
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

    this._loginService.login(this.user).subscribe( 
      (response:any)  =>{
        this.user.token = response.token;
        sessionStorage.setItem('token', this.user.token);
        this._route.navigateByUrl('management');
      },
      (error) => {
        if(error.status === 404){
           this.dialog.open(DialogComponent, {
            data: {message: 'El correo electrónico no está registrado', title: 'Error!' }
          });
        }
        else if(error.status === 501){
           this.dialog.open(DialogComponent, {
            data: {message: 'El correo electrónico y la contraseña no se corresponden.', title: 'Error!' }
         });
        }
        else{
           this.dialog.open(DialogComponent, {
            data: {message: 'Error en el servidor al comprobar el usuario', title: 'Error!' }
         });
        }
        
      });
   
 }
 public createForm(){
  this.form = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
    password:['', Validators.required]
  });
 }
 public handlerhide(){
   this.hide = !this.hide;
 }

}
