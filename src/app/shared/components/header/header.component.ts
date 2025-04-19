import { Component, Input } from '@angular/core';
import { ThemeButtonsComponent } from '../theme-buttons/theme-buttons.component';
import { LanguageButtonsComponent } from '../language-buttons/language-buttons.component';
import { BurguerIconComponent } from '../menu/burguer-icon/burguer-icon.component';
import { CommonModule } from '@angular/common';

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
export class HeaderComponent {
    @Input() isInHome: boolean = false
}
