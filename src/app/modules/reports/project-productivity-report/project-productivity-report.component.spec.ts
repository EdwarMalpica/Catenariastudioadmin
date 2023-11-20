import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProductivityReportComponent } from './project-productivity-report.component';

describe('ProjectProductivityReportComponent', () => {
  let component: ProjectProductivityReportComponent;
  let fixture: ComponentFixture<ProjectProductivityReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectProductivityReportComponent]
    });
    fixture = TestBed.createComponent(ProjectProductivityReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
