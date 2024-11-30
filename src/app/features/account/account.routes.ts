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
        loadComponent: () => import('./views/profile/profile.component').then(c => c.ProfileComponent)
      },
      {
        path: 'edit-profile',
        loadComponent: () => import('./views/edit-profile/edit-profile.component').then(c => c.EditProfileComponent)
      }
    ]
  }
]

