import { AppState } from '@/store/types';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public theme$: Observable<"light" | "dark">;
  constructor(private store: Store<AppState>) {
    this.theme$ = this.store.select("options", "theme");
  }
}



