import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PipeComponent } from './pipe/pipe.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HlightDirective } from './directive/hlight.directive';
import { ArrangeorderPipe } from './pipes/arrangeorder.pipe';
import { SortpipePipe } from './pipes/sortpipe.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { EmployeeListComponent } from './employeelist/employeelist.component';
import { DisplayComponent } from './display/display.component';
import { EmployDetailsComponent } from './employ-details/employ-details.component';
import { EmployService } from './service/employ.service';
import { HttpClientModule } from '@angular/common/http';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { AuthguardServiceService } from './authservices/authguard-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PipeComponent,
    LoginComponent,
    SignupComponent,
    HlightDirective,
    ArrangeorderPipe,
    SortpipePipe,
    FilterPipe,
    EmployeeListComponent,
    DisplayComponent,
    EmployDetailsComponent,
    UpdateEmployeeComponent,
    CreateEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
    HttpClientModule
    
  ],
  providers: [EmployService,AuthguardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
