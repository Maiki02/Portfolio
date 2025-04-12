import { Component } from '@angular/core';
import { ThemeButtonsComponent } from '../theme-buttons/theme-buttons.component';
import { LanguageButtonsComponent } from '../language-buttons/language-buttons.component';

@Component({
    selector: 'app-header',
    imports: [
        ThemeButtonsComponent,
        LanguageButtonsComponent
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
