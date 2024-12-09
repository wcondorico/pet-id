import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { accountRoutes } from './account.routes';
import { PetFacade } from './aplication/facade/pet.facade';
import { PetHttp } from './infraestructure/http/pet.http';

@NgModule({
  providers: [
    provideRouter(accountRoutes),
    {
      provide: PetFacade,
      useClass: PetHttp
    }
  ]
})
export class AccountModule { }
