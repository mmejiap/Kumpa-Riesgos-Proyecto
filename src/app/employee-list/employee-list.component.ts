import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  // private _employees = [
  //   { "id": 1, "name": "Bruno", "age": 26 },
  //   { "id": 2, "name": "Fabio", "age": 26 }
  // ];
  // public get employees() {
  //   return this._employees;
  // }
  // public set employees(value) {
  //   this._employees = value;
  // }

  public employees = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    // this.employees = this._employeeService.getEmployees();
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data);
  }

}
