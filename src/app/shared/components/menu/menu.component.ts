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
export class MenuComponent {
  private isOpen:boolean = false;

  private isOpen$!:Subscription;
  constructor(private store:Store<AppState>){

  }

}
