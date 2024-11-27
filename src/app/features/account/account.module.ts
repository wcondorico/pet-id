import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { accountRoutes } from './account.routes';

@NgModule({
  providers: [
    provideRouter(accountRoutes),
    /*{
      provide: ReferenceFacade,
      useClass: ReferenceHttp
    },
    {
      provide: TagFacade,
      useClass: TagHttp
    },
    {
      provide: AuthorFacade,
      useClass: AuthorsHttp
    }*/
  ]
})
export class AccountModule { }
