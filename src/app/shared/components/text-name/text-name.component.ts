import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-text-name',
  imports: [CommonModule],
  templateUrl: './text-name.component.html',
  styleUrl: './text-name.component.scss'
})
export class TextNameComponent {
  completeText = `Miqueas\nGentile`;
  textVisible: string = '';
  nameArray: string[] = [];
  currentIndex = -1;

  constructor() {
    this.revealLetters();
  }

  revealLetters() {
    const interval = setInterval(() => {
      this.currentIndex++;
      this.textVisible = this.completeText.slice(0, this.currentIndex);
      if (this.currentIndex === this.completeText.length) {
        clearInterval(interval);
      }
    }, 200);
  }
}


