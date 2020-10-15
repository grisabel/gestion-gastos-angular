import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './angular-material.module';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { ManagementComponent } from './component/management/management.component';
import { WeekComponent } from './component/week/week.component';
import { MonthComponent } from './component/month/month.component';
import { YearComponent } from './component/year/year.component';
import { ConfirmComponent } from './component/confirm/confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DialogComponent,
    ManagementComponent,
    WeekComponent,
    MonthComponent,
    YearComponent,
    ConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
