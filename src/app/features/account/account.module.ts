import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { accountRoutes } from './account.routes';
import { PetFacade } from './aplication/facade/pet.facade';
import { PetHttp } from './infraestructure/http/pet.http';
import { AdFacade } from './aplication/facade/ad.facade';
import { AdHttp } from './infraestructure/http/ad.http';
import { AuthFacade } from '../auth/aplication/facade/auth.facade';
import { AuthHttp } from '../auth/infraestructure/http/auth.http';
import { CorrelativeFacade } from './aplication/facade/correlative.facade';
import { CorrelativeHttp } from './infraestructure/http/correlative.http';
import { NoteFacade } from './aplication/facade/note.facade';
import { NoteHttp } from './infraestructure/http/note.http';
import { PetAdoptionFacade } from './aplication/facade/pet-adoption.facade';
import { PetAdoptionHttp } from './infraestructure/http/pet-adoption.http';
import { PetLostFacade } from './aplication/facade/pet-lost.facade';
import { PetLostHttp } from './infraestructure/http/pet-lost.http';
import { UserFacade } from './aplication/facade/user.facade';
import { UserHttp } from './infraestructure/http/user.http';
import { VaccineFacade } from './aplication/facade/vaccine.facade';
import { VaccineHttp } from './infraestructure/http/vaccine.http';

@NgModule({
  providers: [
    provideRouter(accountRoutes),
    {
      provide: PetFacade,
      useClass: PetHttp
    },
    {
      provide: AdFacade,
      useClass: AdHttp
    },
    {
      provide: AuthFacade,
      useClass: AuthHttp
    },
    {
      provide: CorrelativeFacade,
      useClass: CorrelativeHttp
    },
    {
      provide: NoteFacade,
      useClass: NoteHttp
    },
    {
      provide: PetAdoptionFacade,
      useClass: PetAdoptionHttp
    },
    {
      provide: PetLostFacade,
      useClass: PetLostHttp
    },
    {
      provide: UserFacade,
      useClass: UserHttp
    },
    {
      provide: VaccineFacade,
      useClass: VaccineHttp
    },

  ]
})
export class AccountModule { }
