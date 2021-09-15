import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user='';
    formGroup!: FormGroup;
    message: string;
    sto = false;
    // public register: Register[] = [];
  
    isFormValid = true;
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
      this.message = '';
      }
     ngOnInit() {
      localStorage.setItem('SessionUser',this.user);
       this.formGroup = new FormGroup({
         EmailId: new FormControl('', [
           Validators.required,
          // Validators.pattern(/^[a-zA-Z0-9.!#$%&â€™*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
         

         ]),
         Password: new FormControl('', [
           Validators.required,
           Validators.minLength(8),
           Validators.maxLength(20)
         ])
       });
     }
      onSubmit() {
       console.log(this.formGroup);
       this.isFormValid = true;
       if (this.isFormValid) {
      //  const user = {
      //    EmailId: this.formGroup.value('EmailId'), // Username input field
      //    password: this.formGroup.value('Password') // Password input field
      //  };
       console.log('FormValid');
       //console.log(user.EmailId + '  ' + user.password );
       console.log('Formgroup value :' + this.formGroup.value);
       this.router.navigate(['/display']);
       }
       this.router.navigate(['/display']);
  
      }
  
     onReset() {
       this.formGroup.reset();
     }
  
    //  isValid(controlName) {
    //   return this.formGroup.get(controlName).invalid && this.formGroup.get(controlName).touched;
    //  }
  
  moveToRegister() {
      this.router.navigate(['../signup'], { relativeTo: this.activatedRoute});
  }
  
  }
