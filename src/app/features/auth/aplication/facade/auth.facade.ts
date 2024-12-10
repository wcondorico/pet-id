import { inject, Injectable } from '@angular/core';
import { SignIn, SignUp } from '@features/auth/core/interfaces/auth.interface';
import { AuthRepository } from '@features/auth/domain/repository/auth.repository';

@Injectable()
export class AuthFacade {
  auth = inject(AuthRepository);

  signUp(user: SignUp) {
    return this.auth.signUp(user);
  }

  signIn(user: SignIn) {
    return this.auth.signIn(user);
  }
}
