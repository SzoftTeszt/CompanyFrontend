import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  newEmployee:any={}
  employees:any=[]

  oszlopok=[
    {key:"id", text:"#", type:"plain"},
    {key:"name", text:"Név", type:"text"},
    {key:"sex", text:"Nem", type:"select", 
      options:[
        {value:0, text:"férfi"},
        {value:1, text:"nő"},
        {value:2, text:"más"}
      ]
    },
    {key:"age", text:"Kor", type:"number"},
    {key:"address", text:"Cím", type:"text"},
  ]


  constructor(private base:BaseService){
    base.getEmployees().subscribe(
      (adatok)=> this.employees=adatok
    )
  }


  addEmployee(){
    this.base.postEmployee(this.newEmployee)
    this.newEmployee={}
  }

  updateEmployee(employee:any){
    this.base.putEmployee(employee)
  }

  deleteEmployee(employee:any){
    this.base.deleteEmployee(employee)
  }
}
