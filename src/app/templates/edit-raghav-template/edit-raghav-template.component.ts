import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Employee } from 'src/models/employee.modal';
import { RaghavTemplateService } from 'src/services/raghav-template.service';

@Component({
  selector: 'app-edit-raghav-template',
  templateUrl: './edit-raghav-template.component.html',
  styleUrls: ['./edit-raghav-template.component.css'],
})
export class EditRaghavTemplateComponent implements OnInit {
  employees: Employee[] = [];
  keyMetricsTop = [1, 2, 3, 4, 5, 6, 7, 8];
  keyMetricsBottom = [1, 2, 3, 4, 5];
  keyMetricsBottomDown = [11, 22, 33, 44, 55];
  sub: Subscription = new Subscription();
  constructor(public raghavTemplateService: RaghavTemplateService) {}

  ngOnInit(): void {
    this.sub = this.raghavTemplateService.sharedEmployees.subscribe(
      (employees) => {
        this.employees = employees;
        this.sub.unsubscribe();
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

  dropKeyMetricsTop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.keyMetricsTop,
      event.previousIndex,
      event.currentIndex
    );
  }

  dropKeyMetricsBottom(event: CdkDragDrop<string[]>) {
    {
      if (event.previousContainer === event.container) {
        moveItemInArray(
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      } else {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      }
    }
  }
}
