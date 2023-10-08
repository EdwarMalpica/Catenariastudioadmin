import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosAtencionComponent } from './horarios-atencion.component';

describe('HorariosAtencionComponent', () => {
  let component: HorariosAtencionComponent;
  let fixture: ComponentFixture<HorariosAtencionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorariosAtencionComponent]
    });
    fixture = TestBed.createComponent(HorariosAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
