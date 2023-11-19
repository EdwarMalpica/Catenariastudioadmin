import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoNuevoHorarioComponent } from './dialogo-nuevo-horario.component';

describe('DialogoNuevoHorarioComponent', () => {
  let component: DialogoNuevoHorarioComponent;
  let fixture: ComponentFixture<DialogoNuevoHorarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogoNuevoHorarioComponent]
    });
    fixture = TestBed.createComponent(DialogoNuevoHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
