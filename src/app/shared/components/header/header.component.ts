import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { ThemeButtonsComponent } from '../theme-buttons/theme-buttons.component';
import { LanguageButtonsComponent } from '../language-buttons/language-buttons.component';
import { BurguerIconComponent } from '../menu/burguer-icon/burguer-icon.component';
import { CommonModule } from '@angular/common';
import { WIDTH_WINDOW_HEADER } from '@/shared/const/options';

@Component({
    selector: 'app-header',
    imports: [
        ThemeButtonsComponent,
        LanguageButtonsComponent,
        CommonModule
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
    @Input() isInHome: boolean = false;
    windowWidth: number=0;

    constructor() { }

    ngOnInit(): void {
        this.windowWidth = window.innerWidth;

        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth;
        });
    }

    ngOnDestroy(): void {
        window.removeEventListener('resize', () => {});
    }

    isHeaderWithBackground(){
        return this.isInHome || this.windowWidth <= WIDTH_WINDOW_HEADER;
    }
}
