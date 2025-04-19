import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-education',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardEducationComponent {
  @Input({required: true}) title: string = '';
  @Input({required: true}) description: string = '';
  @Input({required: true}) date: string = '';
}
