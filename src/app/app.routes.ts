import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { CreateBinComponent } from './components/create-bin/create-bin.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { ViewSnippetComponent } from './components/view-snippet/view-snippet.component';
import { DiffredViewComponent } from './components/diffred-view/diffred-view.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    // loadChildren: () => import('./components/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'create',
    component: CreateBinComponent,
    canActivate: [authGuard],
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'snippet/:id',
    component: ViewSnippetComponent,
  },
  {
    path: 'demo',
    component: DiffredViewComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
