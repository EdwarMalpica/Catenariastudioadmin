import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderButtonComponent } from './loader-button.component';

describe('LoaderButtonComponent', () => {
  let component: LoaderButtonComponent;
  let fixture: ComponentFixture<LoaderButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderButtonComponent]
    });
    fixture = TestBed.createComponent(LoaderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
