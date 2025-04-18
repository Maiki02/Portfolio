import { IconsComponent } from '@/shared/icons/icons.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-help-button',
  imports: [
    IconsComponent,
    CommonModule
  ],
  templateUrl: './help-button.component.html',
  styleUrl: './help-button.component.scss'
})
export class HelpButtonComponent {
  public showList = false;

  constructor(){

  }

  changeShowList() {
    this.showList = !this.showList;
  }

  sendMessageText() {
    return 'Enviar mensaje';
  }

  getContactText() {
    return 'Contacto';
  }
}
