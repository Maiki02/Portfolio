import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-start-button',
  imports: [
    CommonModule
  ],
  templateUrl: './start-button.component.html',
  styleUrl: './start-button.component.scss'
})
export class StartButtonComponent {

  x = 0;
  y = 0;
  show = false;
  
  onMouseMove(event: MouseEvent) {
    this.x = event.offsetX;
    this.y = event.offsetY;
  }
  
}
