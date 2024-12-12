import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'account',
    loadChildren: () => import('./features/account/account.module').then(m => m.AccountModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.AccountModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];
