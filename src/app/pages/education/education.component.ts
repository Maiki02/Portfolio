import { CardEducationComponent } from '@/models/education/components/card/card.component';
import { LayoutComponent } from '@/shared/components/layout/layout.component';
import { ROUTES } from '@/shared/const/routes';
import { setRoute } from '@/store/options/options.actions';
import { AppState } from '@/store/types';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-education',
  imports: [
    LayoutComponent,
    CardEducationComponent
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {

  constructor(private store:Store<AppState>){}

  ngOnInit(): void {
    this.store.dispatch(setRoute({route: ROUTES.EDUCATION}));
  } 

  getDescriptionUTN(){
    return `• Formación integral orientada a la industria de los videojuegos.\n
    • Foco en diseño interactivo, programación y arte digital.\n
    • Trabajo en equipos multidisciplinarios.\n
    • Participación en todas las etapas del desarrollo: creación, producción y comercialización.`
  }

  getDescriptionUNR(){
    return `• Formación en fundamentos teóricos de la informática.\n
    • Enfoque en matemáticas, algoritmos y estructuras de datos.\n
    • Introducción a lenguajes formales, lógica y arquitectura de computadoras.\n
    • Desarrollo de habilidades analíticas y resolución de problemas complejos.`
  }

  getDescriptionArgProg(){
  return `• Formación en fundamentos de programación.\n
  • Introducción a algoritmos, estructuras de datos y lógica computacional.\n
  • Enfoque en lenguajes como JavaScript, HTML y CSS.\n
  • Introducción a formación en datos e inteligencia artificial.`
  
  }
}
