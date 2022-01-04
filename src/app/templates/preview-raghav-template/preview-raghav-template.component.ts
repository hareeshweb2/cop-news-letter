import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Employee } from 'src/models/employee.modal';
import { RaghavTemplateService } from 'src/services/raghav-template.service';

@Component({
  selector: 'app-preview-raghav-template',
  templateUrl: './preview-raghav-template.component.html',
  styleUrls: ['./preview-raghav-template.component.css'],
})
export class PreviewRaghavTemplateComponent implements OnInit {
  employees: Employee[] = [];
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
}
