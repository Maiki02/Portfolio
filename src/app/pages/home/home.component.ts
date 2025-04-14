import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HeaderComponent } from '@/shared/components/header/header.component';
import { AppState } from '@/store/types';
import { ThemeService } from '@/shared/services/theme.service';
import { TextNameComponent } from '@/shared/components/text-name/text-name.component';
import { StartButtonComponent } from '@/shared/components/start-button/start-button.component';
import { Router } from '@angular/router';
import { setRoute } from '@/store/options/options.actions';
import { ROUTES } from '@/shared/const/routes';

@Component({
    selector: 'app-home',
    imports: [
        CommonModule,
        HeaderComponent,
        TextNameComponent,
        StartButtonComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
    
    private INDIVIDUAL_ANIMATION_DURATION = 700;
    private isOutHeader = false;
    private isOutName = false;
    private isOutButton = false;


    public theme$: Observable<"light" | "dark">
    constructor(private store:Store<AppState>, private themeSvc:ThemeService, private router:Router){
        this.theme$ = this.themeSvc.theme$
    }

    ngOnInit(): void {
        this.store.dispatch(setRoute({route: ROUTES.HOME}))
    }

    startAnimation(){
        this.setIsOutHeader(true);

        setTimeout(() => {
            this.setIsOutName(true);
        }, this.INDIVIDUAL_ANIMATION_DURATION - 200);

        setTimeout(() => {
            this.setIsOutButton(true);
        }, this.INDIVIDUAL_ANIMATION_DURATION * 2 - 400);


        setTimeout(() => {
            console.log("Redireccionar a /library")
        }, this.INDIVIDUAL_ANIMATION_DURATION * 3 - 600);
    }

    public getIsOutHeader() {
        return this.isOutHeader;
    }

    public setIsOutHeader(isOutHeader: boolean) {
        this.isOutHeader = isOutHeader;
    }

    public getIsOutName() {
        return this.isOutName;
    }

    public setIsOutName(isOutName: boolean) {
        this.isOutName = isOutName;
    }

    public getIsOutButton() {
        return this.isOutButton;
    }

    public setIsOutButton(isOutButton: boolean) {
        this.isOutButton = isOutButton;
    }


    
}
