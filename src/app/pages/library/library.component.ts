import { Component } from '@angular/core';
import { LayoutComponent } from '../../shared/components/layout/layout.component';
import { CardLibraryComponent } from '@/models/components/card-library/card-library.component';

@Component({
  selector: 'app-library',
  imports: [
    LayoutComponent,
    CardLibraryComponent
  ],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent {

}
