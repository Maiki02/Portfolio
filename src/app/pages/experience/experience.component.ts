import { LayoutComponent } from '@/shared/components/layout/layout.component';
import { ROUTES } from '@/shared/const/routes';
import { setRoute } from '@/store/options/options.actions';
import { AppState } from '@/store/types';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-experience',
  imports: [
    LayoutComponent
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {

  constructor(private store:Store<AppState>){}

  ngOnInit(): void {
    this.store.dispatch(setRoute({route: ROUTES.EXPERIENCE}));
  } 
}
