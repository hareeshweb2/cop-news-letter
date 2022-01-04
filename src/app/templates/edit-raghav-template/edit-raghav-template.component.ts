import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/models/employee.modal';
import { RaghavTemplateService } from 'src/services/raghav-template.service';

@Component({
  selector: 'app-edit-raghav-template',
  templateUrl: './edit-raghav-template.component.html',
  styleUrls: ['./edit-raghav-template.component.css'],
})
export class EditRaghavTemplateComponent implements OnInit {
  employees: Employee[] = [];
  constructor(public raghavTemplateService: RaghavTemplateService) {}

  ngOnInit(): void {
    const destroy = this.raghavTemplateService.sharedEmployees.subscribe(
      (employees) => {
        this.employees = employees;
        destroy.unsubscribe();
      }
    );
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.employees, event.previousIndex, event.currentIndex);
  }

  onContentChange(id: number, target: any) {
    let emp: any = this.employees.find((emp) => emp.id === id);
    emp.message = target.innerHTML;
    this.raghavTemplateService.nextEmployees(this.employees);
  }
}
