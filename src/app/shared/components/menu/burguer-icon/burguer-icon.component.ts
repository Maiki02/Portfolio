import { ThemeService } from '@/shared/services/theme.service';
import { setIsMenuOpen } from '@/store/options/options.actions';
import { AppState } from '@/store/types';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-burguer-icon',
  imports: [
    CommonModule
  ],
  templateUrl: './burguer-icon.component.html',
  styleUrl: './burguer-icon.component.scss'
})
export class BurguerIconComponent implements OnInit, OnDestroy {
  private isOpen:boolean = false;
  public theme$: Observable<"light" | "dark">
  private isOpen$!:Subscription;
  constructor(private store:Store<AppState>, private themeSvc:ThemeService) {
    this.theme$ = this.themeSvc.theme$
  }

  ngOnInit(): void {
    this.setSubscriptions();
  }

  ngOnDestroy(): void {
    this.setUnsubscriptions();
  }

  private setSubscriptions(){
    this.isOpen$ = this.store.select(state => state.options.isMenuOpen).subscribe(isOpen => this.isOpen = isOpen);
  }

  private setUnsubscriptions(){
    this.isOpen$?.unsubscribe();
  }

  public getIsOpen() {
    return this.isOpen;
  }

  public toggleMenu() {
    this.store.dispatch(setIsMenuOpen({isMenuOpen: !this.isOpen}));
  }
}
