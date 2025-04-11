import { Component } from '@angular/core';
import { ButtonLightDarkModeComponent } from '../button-light-dark-mode/button-light-dark-mode.component';

@Component({
    selector: 'app-header',
    imports: [
        ButtonLightDarkModeComponent
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
