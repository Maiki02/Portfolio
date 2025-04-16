import { AppState } from '@/store/types';
import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { MenuIconsComponent } from './menu-icons/menu-icons.component';
import { LangService } from '@/shared/services/lang.service';
import { ROUTES } from '@/shared/const/routes';
import { Router } from '@angular/router';
import { HelpButtonComponent } from '../help-button/help-button.component';

@Component({
  selector: 'app-menu',
  imports: [
    CommonModule, 
    MenuIconsComponent,
    HelpButtonComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit, OnDestroy {
  @Input({ required: true }) lang!: "es" | "en";
  public ROUTES = ROUTES;
  private routeSelected: string = '';

  public isOpen$: Observable<boolean>;
  private route$!:Subscription;
  constructor(private store: Store<AppState>, private langSvc:LangService, private router:Router) {
    this.isOpen$=this.store.select('options','isMenuOpen');
  }

  ngOnInit(): void {
    this.route$ = this.store.select('options','route').subscribe(route => this.routeSelected = route);
  }

  ngOnDestroy(): void {
    this.route$?.unsubscribe();
  }

  isRouteSelected(route: string) {
    return this.routeSelected === route;
  }

  goTo(route: string) {
    this.router.navigate([route]);
  }

  getLibraryText() {
    return this.langSvc.textMenu(this.lang, 'library');
  }
  getWorkText() {
    return this.langSvc.textMenu(this.lang, 'work');
  }
  getEducationText() {
    return this.langSvc.textMenu(this.lang, 'education');
  }
  getProfileText() {
    return this.langSvc.textMenu(this.lang, 'profile');
  }
}
