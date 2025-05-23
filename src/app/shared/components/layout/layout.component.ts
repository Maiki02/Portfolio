import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@/store/types';
import { ThemeService } from '@/shared/services/theme.service';
import { CommonModule } from '@angular/common';
import { BurguerIconComponent } from '../menu/burguer-icon/burguer-icon.component';
import { BackgroundBlobComponent } from '../background-blob/background-blob.component';

@Component({
    selector: 'app-layout',
    imports: [
        CommonModule,
        HeaderComponent,
        BurguerIconComponent,
        MenuComponent,
        FooterComponent,
        BackgroundBlobComponent
    ],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss'
})
export class LayoutComponent {
    private isMenuOpen = false;

    public theme$: Observable<"light" | "dark">;
    public lang$: Observable<"es" | "en">
    private isOpen$!: Subscription;

    constructor(private store: Store<AppState>, private themeSvc:ThemeService) {
      this.theme$ = this.themeSvc.theme$;
      this.lang$ = this.store.select('options','language');
    }

    
  ngOnInit(): void {
    this.setSubscriptions();
  }

  ngOnDestroy(): void {
    this.setUnsubscriptions();
  }

  private setSubscriptions(){
    this.isOpen$ = this.store.select(state => state.options.isMenuOpen).subscribe(isOpen => this.isMenuOpen = isOpen);
  }

  private setUnsubscriptions(){
    this.isOpen$?.unsubscribe();
  }

  getIsMenuOpen() {
    return this.isMenuOpen;
  }
}
