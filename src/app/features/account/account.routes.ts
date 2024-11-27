import { Routes } from "@angular/router";

export const accountRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./account.component').then(c => c.AccountComponent),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: "full"
      },
      {
        path: 'home',
        loadComponent: () => import('./views/home/home.component').then(c => c.HomeComponent)
      }
    ]
  }
]

