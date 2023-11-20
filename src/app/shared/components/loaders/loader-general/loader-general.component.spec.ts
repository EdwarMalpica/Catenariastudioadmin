import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderGeneralComponent } from './loader-general.component';

describe('LoaderGeneralComponent', () => {
  let component: LoaderGeneralComponent;
  let fixture: ComponentFixture<LoaderGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderGeneralComponent]
    });
    fixture = TestBed.createComponent(LoaderGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
