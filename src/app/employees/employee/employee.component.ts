import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';

interface department{
  id:number;
  value:string
}


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service:EmployeeService) { }

  departments :department[]=[
  { id: 3, value:'Dep 1'},
  { id: 2, value:'Dep 2'},
  { id: 3, value:'Dep 3'}];

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.service.form)
  }
}
