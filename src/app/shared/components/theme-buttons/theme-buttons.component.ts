import { ThemeService } from '@/shared/services/theme.service';
import { setTheme } from '@/store/options/options.actions';
import { AppState } from '@/store/types';
import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-theme-buttons',
  imports: [
    CommonModule
  ],
  templateUrl: './theme-buttons.component.html',
  styleUrl: './theme-buttons.component.scss'
})
export class ThemeButtonsComponent implements OnInit, OnDestroy {
  @Input({required: true}) isHeaderWithBackground: boolean=false;
  
  public theme$: Observable<"light" | "dark">;
  public theme: "light" | "dark" = "light";
  public subs!:Subscription;
  constructor(private store: Store<AppState>, private themeSvc:ThemeService) {
    this.theme$ = this.themeSvc.theme$
  }

  changeTheme(theme: "light" | "dark") {
    this.store.dispatch(setTheme({ theme }));
  }

  toggleTheme() {
    this.changeTheme(this.isDarkMode() ? 'light' : 'dark');
  }

  isDarkMode(){
    return this.theme === 'dark';
  }

  setSubscriptions(){
    this.subs =this.theme$.subscribe(theme => {
      this.theme = theme;
    })
  }

  setUnsubscriptions(){
    this.subs?.unsubscribe();
  }

  ngOnInit() {
    this.setSubscriptions();
  }

  ngOnDestroy() {
    this.setUnsubscriptions();
  }
}
