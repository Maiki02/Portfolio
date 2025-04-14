import { AppState } from '@/store/types';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-menu',
    imports: [
        CommonModule
    ],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit, OnDestroy {
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

  getIsOpen() {
    return this.isOpen;
  }
}
