import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-text-name',
  imports: [CommonModule],
  templateUrl: './text-name.component.html',
  styleUrl: './text-name.component.scss'
})
export class TextNameComponent {
  name = `Miqueas\nGentile`;
  nameArray: string[] = [];

  constructor() {
    // Reemplaza saltos de línea por <br> en Angular-friendly forma
    this.nameArray = this.name.split('').flatMap(char => char === '\n' ? ['\n'] : [char]);
  }
}

