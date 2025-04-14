import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../../shared/components/layout/layout.component';
import { CardLibraryComponent } from '@/models/project/components/card-library/card-library.component';
import { Store } from '@ngrx/store';
import { AppState } from '@/store/types';
import { setRoute } from '@/store/options/options.actions';
import { ROUTES } from '@/shared/const/routes';

@Component({
  selector: 'app-library',
  imports: [
    LayoutComponent,
    CardLibraryComponent
  ],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent implements OnInit {

  constructor(private store:Store<AppState>){}

  ngOnInit(): void {
    this.store.dispatch(setRoute({route: ROUTES.LIBRARY}));
  } 

}
