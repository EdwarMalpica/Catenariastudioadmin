import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-nuevo-horario',
  templateUrl: './dialogo-nuevo-horario.component.html',
  styleUrls: ['./dialogo-nuevo-horario.component.css']
})
export class DialogoNuevoHorarioComponent {

  formulario: FormGroup;

  constructor (private activemodal: MatDialogRef<DialogoNuevoHorarioComponent>){
    this.buildForm();
  }

  //Formulario reactivo
  buildForm(){
    this.formulario = new FormGroup({
      horaInicio: new FormControl(null, [Validators.required] ),//validando los campos del fomr
      horaFin: new FormControl(null, [Validators.required]  )

    });
  }


  addSchedule(){

    if (this.formulario.valid) {
      this.closeDialog(this.formulario.value);
    }
    // console.log(this.formulario.value)
    // this.formulario.valid;
  }

  closeDialog(horario: any){
    this.activemodal.close(horario);
  }
  closeDialogCancel(){
    this.activemodal.close();
  }

}
