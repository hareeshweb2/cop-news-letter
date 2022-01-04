import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewRaghavTemplateComponent } from './preview-raghav-template.component';

describe('PreviewRaghavTemplateComponent', () => {
  let component: PreviewRaghavTemplateComponent;
  let fixture: ComponentFixture<PreviewRaghavTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewRaghavTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewRaghavTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
