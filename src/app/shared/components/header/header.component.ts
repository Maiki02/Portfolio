import { Component } from '@angular/core';
import { ThemeButtonsComponent } from '../theme-buttons/theme-buttons.component';

@Component({
    selector: 'app-header',
    imports: [
        ThemeButtonsComponent
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
