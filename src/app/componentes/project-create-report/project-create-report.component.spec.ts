import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreateReportComponent } from './project-create-report.component';

describe('ProjectCreateReportComponent', () => {
  let component: ProjectCreateReportComponent;
  let fixture: ComponentFixture<ProjectCreateReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectCreateReportComponent]
    });
    fixture = TestBed.createComponent(ProjectCreateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
