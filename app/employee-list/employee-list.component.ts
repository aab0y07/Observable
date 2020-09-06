import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  constructor(private _employeeService :EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList(){
    return this._employeeService.getEmployees()
        // Step3. Subscribe to the observable from EmpList and EmpDetail
        // Step4. Assign the employee array to a local variable 
        .subscribe(data =>this.employees = data);
  }

}
