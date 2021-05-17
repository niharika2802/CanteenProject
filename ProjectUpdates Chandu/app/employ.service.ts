import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Employ } from './employ';

@Injectable({
  providedIn: 'root'
})
export class EmployService {
  addEmploy(employ : Employ) : Observable<string> {
    return this._http.post("http://localhost:8080/RestDbEmp/webapi/employ/employInsert/",employ).
    map((res : Response) => res.text());
  }
  constructor(private _http : Http ) { }
}
