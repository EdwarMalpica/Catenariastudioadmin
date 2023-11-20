import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersRegistryReportComponent } from './users-registry-report.component';

describe('UsersRegistryReportComponent', () => {
  let component: UsersRegistryReportComponent;
  let fixture: ComponentFixture<UsersRegistryReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersRegistryReportComponent]
    });
    fixture = TestBed.createComponent(UsersRegistryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
