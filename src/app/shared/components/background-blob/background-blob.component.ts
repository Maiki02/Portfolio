import { ThemeService } from '@/shared/services/theme.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-background-blob',
  imports: [CommonModule],
  templateUrl: './background-blob.component.html',
  styleUrl: './background-blob.component.scss'
})
export class BackgroundBlobComponent {

  public theme$: Observable<"light" | "dark">
  constructor(private themeSvc:ThemeService){
    this.theme$ = this.themeSvc.theme$;
  }
}
