import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employ } from '../employ';
import { EmployService } from '../service/employ.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
    employ: Employ = new Employ();
   
     constructor(private employService: EmployService, private router: Router) { }
   
     ngOnInit(): void {
     }
     saveEmploy(){
       this.employService.createEmploy(this.employ).subscribe(data =>{
         console.log(data);
         this.goToEmployList();
       }, error => console.log(error));
     }
   
     goToEmployList(){
       this.router.navigate(['/display/employs']);
     }
   
     onSubmit(){
       console.log(this.employ);
       this.saveEmploy();
     }
   }
   