import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { authRoutes } from './auth.routes';
import { AuthFacade } from '@features/auth/aplication/facade/auth.facade';
import { AuthHttp } from '@features/auth/infraestructure/http/auth.http';

@NgModule({
  providers: [
    provideRouter(authRoutes),
    {
      provide: AuthFacade,
      useClass: AuthHttp
    }
  ]
})
export class AuthModule { }
