import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-library',
  imports: [],
  templateUrl: './card-library.component.html',
  styleUrl: './card-library.component.scss'
})
export class CardLibraryComponent {
  @Input({required: true}) title: string = '';
  @Input({required: true}) pathImg: string = '';
}
