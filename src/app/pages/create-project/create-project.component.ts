import { Component } from '@angular/core';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})


export class CreateProjectComponent {
  
  option_selected_dropdown = "";
  options_dropdown = ["Proyecto residencial", "Proyecto comercial", "Proyecto industrial", "Proyecto educativo", "Proyecto de salud", "Proyecto de entretenimiento", "Proyecto de restauración", "Proyecto de transporte", "Proyecto de urbanismo", "Proyecto sostenible"];

  text:string
  name_inp:string
  selectedTypeProject:string
  description_inp:string
  

  selectedOption: string = 'Selecciona una opción';
  options: string[] = ['Opción 1', 'Opción 2', 'Opción 3'];

  onSelectOption(option: string): void {
    this.selectedOption = option;
  }

  receiveMessage($event: string) {
    this.option_selected_dropdown = $event;
  }

  getName(){
    console.log(this.name_inp)
  }


}
