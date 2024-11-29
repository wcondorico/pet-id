import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { accountRoutes } from './account.routes';

@NgModule({
  providers: [
    provideRouter(accountRoutes)
  ]
})
export class AccountModule { }
