import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/models/employee.modal';
import { RaghavTemplateService } from 'src/services/raghav-template.service';

@Component({
  selector: 'app-preview-raghav-template',
  templateUrl: './preview-raghav-template.component.html',
  styleUrls: ['./preview-raghav-template.component.css'],
})
export class PreviewRaghavTemplateComponent implements OnInit {
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
}
