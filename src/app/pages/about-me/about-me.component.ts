import { LayoutComponent } from '@/shared/components/layout/layout.component';
import { ROUTES } from '@/shared/const/routes';
import { setRoute } from '@/store/options/options.actions';
import { AppState } from '@/store/types';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-about-me',
  imports: [
    LayoutComponent
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {

  constructor(private store:Store<AppState>){}

  ngOnInit(): void {
    this.store.dispatch(setRoute({route: ROUTES.PROFILE}));
  } 
}
