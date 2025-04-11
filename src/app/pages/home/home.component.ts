import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HeaderComponent } from '@/shared/components/header/header.component';
import { AppState } from '@/store/types';
import { ThemeService } from '@/shared/services/theme.service';

@Component({
    selector: 'app-home',
    imports: [
        CommonModule,
        HeaderComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    
    public theme$: Observable<"light" | "dark">
    constructor(private store:Store<AppState>, private themeSvc:ThemeService){
        this.theme$ = this.themeSvc.theme$
    }



    
}
