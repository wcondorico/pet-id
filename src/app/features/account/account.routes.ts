import { Routes } from "@angular/router";
import { authUserGuard } from "./core/guards/auth-user.guard";

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
        loadComponent: () => import('./views/profile/profile.view').then(c => c.ProfileView),
        canActivate: [authUserGuard]
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
        loadComponent: () => import('./views/adoptions/adoptions.view').then(c => c.AdoptionsView)
      },
      {
        path: 'adoptions/detail/:id',
        loadComponent: () => import('./views/adoption-detail/adoption-detail.component').then(c => c.AdoptionDetailComponent)
      },
      {
        path: 'ads',
        loadComponent: () => import('./views/ad/ad.view').then(c => c.AdView)
      },
      {
        path: 'new-pet',
        loadComponent: () => import('./views/new-pet/new-pet.view').then(c => c.NewPetView)
      },
      {
        path: 'my-pets/detail/:id',
        loadComponent: () => import('./views/pet-detail/pet-detail.view').then(c => c.PetDetailView)
      }
    ]
  }
]

