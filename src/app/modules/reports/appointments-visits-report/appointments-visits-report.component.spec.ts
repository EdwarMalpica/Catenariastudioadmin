import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsVisitsReportComponent } from './appointments-visits-report.component';

describe('AppointmentsVisitsReportComponent', () => {
  let component: AppointmentsVisitsReportComponent;
  let fixture: ComponentFixture<AppointmentsVisitsReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentsVisitsReportComponent]
    });
    fixture = TestBed.createComponent(AppointmentsVisitsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
