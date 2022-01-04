import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from 'src/models/employee.modal';

@Injectable({ providedIn: 'root' })
export class RaghavTemplateService {

  private employees = new BehaviorSubject<Employee[]>([]);
  sharedEmployees = this.employees.asObservable();

  constructor() {}

  nextEmployees(employees: Employee[]) {
    this.employees.next(employees);
  }
}
