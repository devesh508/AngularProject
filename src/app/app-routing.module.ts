import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PipeComponent } from './pipe/pipe.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DisplayComponent } from './display/display.component';
import { EmployDetailsComponent } from './employ-details/employ-details.component';
import { EmployeeListComponent } from './employeelist/employeelist.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pipe', component: PipeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'employeelist', component: EmployeeListComponent},
  {path:'create-employee', component:CreateEmployeeComponent},
  { path: 'update-employ/:id', component:UpdateEmployeeComponent},
  {path: 'employ-details/:id', component: EmployDetailsComponent},

{ path:'display', component: DisplayComponent,
   children : [
    { path:'create-employee', component:CreateEmployeeComponent},
   { path: 'update-employ/:id', component:UpdateEmployeeComponent},
   {path: 'employ-details/:id', component: EmployDetailsComponent},
   {path: 'employs', component: EmployeeListComponent},
   { path: 'login', component: LoginComponent},
    ]},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
