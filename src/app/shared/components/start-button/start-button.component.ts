import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-start-button',
  imports: [
    CommonModule
  ],
  templateUrl: './start-button.component.html',
  styleUrl: './start-button.component.scss'
})
export class StartButtonComponent {
  @Output() clicked = new EventEmitter<void>();

  x = 0;
  y = 0;
  show = false;

  private ANIMATION_DURATION =2000;
  private isExpanded = false;
  
  onMouseMove(event: MouseEvent) {
    this.x = event.offsetX;
    this.y = event.offsetY;
  }

  goToLibrary() {
    console.log("TODO vamos a la librería")
  }

  getIsExpanded() {
    return this.isExpanded;
  }

  setIsExpanded(isExpanded: boolean) {
    this.isExpanded = isExpanded;
  }

  startAnimation(){
    this.setIsExpanded(true);
    this.clicked.emit();

    setTimeout(() => {
      this.setIsExpanded(false);
      this.goToLibrary();
    }, this.ANIMATION_DURATION);
  }
  
}
