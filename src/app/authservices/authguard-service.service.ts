import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  constructor() { }
  gettoken(){
    return !!localStorage.getItem("SessionUser")
  }
}

