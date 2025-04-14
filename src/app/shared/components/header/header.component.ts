import { Component } from '@angular/core';
import { ThemeButtonsComponent } from '../theme-buttons/theme-buttons.component';
import { LanguageButtonsComponent } from '../language-buttons/language-buttons.component';
import { BurguerIconComponent } from '../menu/burguer-icon/burguer-icon.component';

@Component({
    selector: 'app-header',
    imports: [
        ThemeButtonsComponent,
        LanguageButtonsComponent,
        BurguerIconComponent
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
