import { ThemeService } from '@/shared/services/theme.service';
import { setTheme } from '@/store/options/options.actions';
import { AppState } from '@/store/types';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-button-light-dark-mode',
  imports: [],
  templateUrl: './button-light-dark-mode.component.html',
  styleUrl: './button-light-dark-mode.component.scss'
})
export class ButtonLightDarkModeComponent {

  public theme$: Observable<"light" | "dark">;
  constructor(private store: Store<AppState>, private themeSvc:ThemeService) {
    this.theme$ = this.themeSvc.theme$
  }

  changeTheme(theme: "light" | "dark") {
    this.store.dispatch(setTheme({ theme }));
  }
}
