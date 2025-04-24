import { IconsComponent } from '@/shared/icons/icons.component';
import { ThemeService } from '@/shared/services/theme.service';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../../types/education.interface';

@Component({
  selector: 'app-card-education',
  imports: [
    CommonModule,
    IconsComponent
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardEducationComponent {
  @Input({required: true}) education!: Education;

  public theme$: Observable<"light" | "dark">

  constructor(private themeSvc:ThemeService){
    this.theme$ = this.themeSvc.theme$
  }
}
