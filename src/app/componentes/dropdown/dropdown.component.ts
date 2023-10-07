import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {


  buttonText: string = 'Selecciona una opción';
  isDropdownOpen: boolean = false;

  @Input() options_dropdown?:string[];

  updateButtonText(newText: string) {
    this.buttonText = newText;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
