import { setLanguage } from '@/store/options/options.actions';
import { AppState } from '@/store/types';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-language-buttons',
  imports: [
    CommonModule
  ],
  templateUrl: './language-buttons.component.html',
  styleUrl: './language-buttons.component.scss'
})
export class LanguageButtonsComponent {

  public language: Observable<"es" | "en">;

  constructor(private store:Store<AppState>) {
    this.language = this.store.select(state => state.options.language);
  }

  setLanguage(language: "es" | "en") {
    this.store.dispatch(setLanguage({language}));
  }
}
