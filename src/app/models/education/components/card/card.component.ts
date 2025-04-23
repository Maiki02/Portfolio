import { ThemeService } from '@/shared/services/theme.service';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-education',
  imports: [
    CommonModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardEducationComponent {
  @Input({required: true}) title: string = '';
  @Input({required: true}) description: string = '';
  @Input({required: true}) date: string = '';
  @Input({required: true}) imageName: string = '';

  public theme$: Observable<"light" | "dark">

  constructor(private themeSvc:ThemeService){
    this.theme$ = this.themeSvc.theme$
  }
}
