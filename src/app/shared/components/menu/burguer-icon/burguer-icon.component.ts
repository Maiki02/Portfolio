import { setIsMenuOpen } from '@/store/options/options.actions';
import { AppState } from '@/store/types';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-burguer-icon',
  imports: [],
  templateUrl: './burguer-icon.component.html',
  styleUrl: './burguer-icon.component.scss'
})
export class BurguerIconComponent implements OnInit, OnDestroy {
  private isOpen:boolean = false;

  private isOpen$!:Subscription;
  constructor(private store:Store<AppState>){

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
