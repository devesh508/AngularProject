import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employ } from '../employ';
import { EmployService } from '../service/employ.service';

@Component({
  selector: 'app-employ-details',
  templateUrl: './employ-details.component.html',
  styleUrls: ['./employ-details.component.css']
})
export class EmployDetailsComponent implements OnInit {
    id: number=0;
      employ: Employ = new Employ;
    
      constructor(private route: ActivatedRoute, private employService: EmployService) { }
    
      ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.employ = new Employ();
      this.employService.getEmployById(this.id).subscribe(data =>{
        this.employ = data;
      });
      }
    
    }
    