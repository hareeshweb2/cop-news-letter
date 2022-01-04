import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRaghavTemplateComponent } from './edit-raghav-template.component';

describe('EditRaghavTemplateComponent', () => {
  let component: EditRaghavTemplateComponent;
  let fixture: ComponentFixture<EditRaghavTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRaghavTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRaghavTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
