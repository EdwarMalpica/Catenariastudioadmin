import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersVisitsReportComponent } from './users-visits-report.component';

describe('UsersVisitsReportComponent', () => {
  let component: UsersVisitsReportComponent;
  let fixture: ComponentFixture<UsersVisitsReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersVisitsReportComponent]
    });
    fixture = TestBed.createComponent(UsersVisitsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
