import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertWarnComponent } from './alert-warn.component';

describe('AlertWarnComponent', () => {
  let component: AlertWarnComponent;
  let fixture: ComponentFixture<AlertWarnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertWarnComponent]
    });
    fixture = TestBed.createComponent(AlertWarnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
