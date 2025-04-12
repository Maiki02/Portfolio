import { LangService } from '@/shared/services/lang.service';
import { AppState } from '@/store/types';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-start-button',
  imports: [
    CommonModule
  ],
  templateUrl: './start-button.component.html',
  styleUrl: './start-button.component.scss'
})
export class StartButtonComponent implements OnInit, OnDestroy {
  @Output() clicked = new EventEmitter<void>();
  x = 0;
  y = 0;
  show = false;

  public language: "es" | "en" = "es";
  private lang$!: Subscription;
  constructor(private store:Store<AppState>, private langSvc: LangService) {}
  
  ngOnInit(): void {
    this.lang$ = this.store.select('options','language').subscribe(lang => this.language = lang);
  }

  ngOnDestroy(): void {
    this.lang$?.unsubscribe();
  }
  
  onMouseMove(event: MouseEvent) {
    this.x = event.offsetX;
    this.y = event.offsetY;
  }

  startAnimation(){
    this.clicked.emit();
  }
  
  getTextButton(){
    return this.langSvc.textButtonHome(this.language);
  }
}
