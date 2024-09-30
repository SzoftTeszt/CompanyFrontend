import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url= 'http://172.16.16.148:5088/api/Employees/'

  private employeesSubject = new BehaviorSubject([])

  constructor(private http:HttpClient) { 
    this.loadEmployees()
  }

  public getEmployees(){
    return this.employeesSubject
  }

  private loadEmployees(){
    this.http.get(this.url).subscribe(
      (res:any)=> this.employeesSubject.next(res)
    )
  }

  public postEmployee(employee:any){
    this.http.post(this.url,employee).forEach(
      ()=>this.loadEmployees()
    )
  }
  public putEmployee(employee:any){
    this.http.put(this.url+employee.id,employee).forEach(
      ()=>this.loadEmployees()
    )
  }
  public deleteEmployee(employee:any){
    this.http.delete(this.url+employee.id).forEach(
      ()=>this.loadEmployees()
    )
  }

}
