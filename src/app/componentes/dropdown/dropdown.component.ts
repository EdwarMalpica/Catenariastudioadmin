import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {


  buttonText: string = 'Selecciona una opción';
  isDropdownOpen: boolean = false;
  selected_text = "";

  @Input() options_dropdown?:string[];

  @Output() messageEvent = new EventEmitter<string>();

  updateButtonText(newText: string) {
    this.buttonText = newText;
    this.selected_text = newText;
    this.sendMessage();
  }

  sendMessage() {
    this.messageEvent.emit(this.selected_text);
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
