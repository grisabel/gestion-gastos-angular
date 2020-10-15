import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {NotBackService} from './services/canActivate/notBack/not-back.service';
import {CanActivatesGuardService} from './services/canActivate/canActivatedGuard/can-activates-guard.service';


import {LoginComponent} from '././component/login/login.component';
import {RegisterComponent} from '././component/register/register.component';
import {ManagementComponent} from './component/management/management.component';
import {WeekComponent} from './component/week/week.component';
import {MonthComponent} from './component/month/month.component';
import {YearComponent} from './component/year/year.component';

const routes: Routes = [
  {path: "", redirectTo:'login', pathMatch: 'full'},
  {path: "login", canActivate:[NotBackService], component:LoginComponent},
  {path: "register", component:RegisterComponent},
  {path: "management", canActivate:[CanActivatesGuardService], component:ManagementComponent},
  {path: "week", canActivate:[CanActivatesGuardService], component:WeekComponent},
  {path: "month", canActivate:[CanActivatesGuardService], component:MonthComponent},
  {path: "year", canActivate:[CanActivatesGuardService], component:YearComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
