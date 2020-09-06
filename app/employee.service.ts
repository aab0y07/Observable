import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IEmployee} from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string="/assets/data/employees.json"; 
  
  constructor(private http: HttpClient) { }

  // Step1. Create a GET request from EmployeeService
  // Step2. Create IEmployee interface and return observable type and cast the http response into an employee array  
  
  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url); 
  }





}

