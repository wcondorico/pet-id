import { Routes } from "@angular/router";

export const accountRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./account.component').then(c => c.AccountComponent),
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: "full"
      },
      {
        path: 'profile',
        loadComponent: () => import('./views/profile/profile.view').then(c => c.ProfileView)
      },
      {
        path: 'edit-profile',
        loadComponent: () => import('./views/edit-profile/edit-profile.view').then(c => c.EditProfileView)
      },
      {
        path: 'my-pets',
        loadComponent: () => import('./views/my-pets/my-pets.view').then(c => c.MyPetsView)
      },
      {
        path: 'adoptions',
        loadComponent: () => import('./views/adoptions/adoptions.component').then(c => c.AdoptionsComponent)
      }
    ]
  }
]

