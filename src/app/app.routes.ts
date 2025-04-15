import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibraryComponent } from './pages/library/library.component';
import { ROUTES } from './shared/const/routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: ROUTES.HOME,
        component: HomeComponent
    },
    {
        path: ROUTES.LIBRARY,
        component: LibraryComponent
    },
    {
        path: ROUTES.EXPERIENCE,
        loadComponent: () => import('./pages/experience/experience.component').then(m => m.ExperienceComponent)
    },
    {
        path: ROUTES.EDUCATION,
        loadComponent: () => import('./pages/education/education.component').then(m => m.EducationComponent)
    },
    {
        path: ROUTES.PROFILE,
        loadComponent: () => import('./pages/about-me/about-me.component').then(m => m.AboutMeComponent)
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
    },

];
