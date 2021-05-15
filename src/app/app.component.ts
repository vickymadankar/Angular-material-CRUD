import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data=[
    {name:'vicky',age:25}, {name:'ram',age:26}, {name:'sam',age:27},
    {name:'peter',age:28},
  ]

 constructor(public FormBuilder:FormBuilder){}
 profileForm = this.FormBuilder.group({
  firstName:[''],
  lastName:[''],
  address:[''],
  dob:[''],
  gender:[''],
 });

 saveForm(){
  console.log('Form data is ', this.profileForm.value);
}
}
