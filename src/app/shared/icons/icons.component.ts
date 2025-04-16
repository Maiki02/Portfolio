import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICONS } from './icons';

@Component({
  selector: 'app-icons',
  imports: [],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss'
})
export class IconsComponent {
  @Input({required: true}) name!: string;

  // Define aquí tus SVGs como strings
  private icons: { [key: string]: string } = ICONS;

  constructor(private sanitizer: DomSanitizer) {}

  getIcon(): SafeHtml {
    const icon = this.icons[this.name] || '<svg><text x="0" y="15" fill="red">?</text></svg>';
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }

}
