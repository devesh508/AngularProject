import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() greetMessage! :string;
  @Output() valueChange = new EventEmitter();

  counter =0;
  valueChanged() {
    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);

  }
  searchText ="";
  id =null;
  public hdate = new Date();
  public name = 'krisha';
  public message = 'welcome to angular';
  public Character = ['Krisha', 'Govinda','Achutha', 'Madhava', 'Janardhana', 'vasudev','Anantha'];

  public person = {
    fname: 'Radhe',
    lname: 'Krishna'
  };
  public val = 5.678

  constructor() { }
  // name ="Ashwani";
  

  product={
    title:'cricket',
    price:500
  }
  btnHeight=100;
  btnWidth=100;

  ngOnInit(): void {
  }
  
  addProduct(){
    console.log("Add product")
  }

}
