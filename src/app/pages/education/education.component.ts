import { CardEducationComponent } from '@/models/education/components/card/card.component';
import { Education, EducationTypes } from '@/models/education/types/education.interface';
import { EDUCATION } from '@/models/education/types/educations';
import { LayoutComponent } from '@/shared/components/layout/layout.component';
import { ROUTES } from '@/shared/const/routes';
import { setRoute } from '@/store/options/options.actions';
import { AppState } from '@/store/types';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-education',
  imports: [
    LayoutComponent,
    CardEducationComponent
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit, OnDestroy {

  private language: "es" | "en" = "es"

  private lang$!: Subscription
  constructor(private store:Store<AppState>){}

  ngOnInit(): void {
    this.store.dispatch(setRoute({route: ROUTES.EDUCATION}));

    this.lang$ = this.store.select('options','language').subscribe(lang => this.language = lang); 
  } 

  ngOnDestroy(): void {
    this.lang$?.unsubscribe();
  }

  getEducation(type: EducationTypes):Education {
    return EDUCATION[this.language][type];
  }
}
