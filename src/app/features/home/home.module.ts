import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { homeRoutes } from './home.routes';

@NgModule({
  providers: [
    provideRouter(homeRoutes),
  ]
})
export class AccountModule { }
