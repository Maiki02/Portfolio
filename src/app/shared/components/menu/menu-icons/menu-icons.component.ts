import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MENU_ICONS } from './menu-icons';

@Component({
  selector: 'app-menu-icons',
  imports: [],
  templateUrl: './menu-icons.component.html',
  styleUrl: './menu-icons.component.scss'
})
export class MenuIconsComponent {
  @Input({required: true}) name!: string;

  // Define aquí tus SVGs como strings
  private icons: { [key: string]: string } = MENU_ICONS;

  constructor(private sanitizer: DomSanitizer) {}

  getIcon(): SafeHtml {
    const icon = this.icons[this.name] || '<svg><text x="0" y="15" fill="red">?</text></svg>';
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }

}
