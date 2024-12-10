import { Routes } from "@angular/router";

export const authRoutes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: "full"
  },
  {
    path: 'sign-in',
    loadComponent: () => import('./views/sign-in/sign-in.component').then(c => c.SignInComponent)
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./views/sign-up/sign-up.component').then(c => c.SignUpComponent)
  }
]

