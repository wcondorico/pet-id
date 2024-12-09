import { inject, Injectable } from '@angular/core';
import { SignIn, SignUp } from '@features/account/core/interface/auth.interface';
import { AuthRepository } from '@features/account/domain/repository/auth.repository';

@Injectable()
export class AuthFacade {
  auth = inject(AuthRepository);

  SignUp(user: SignUp) {
    return this.auth.signUp(user);
  }

  signIn(user: SignIn) {
    return this.auth.signIn(user);
  }
}
