import { SignIn, SignUp, Tokens } from "@features/account/core/interface/auth.interface";
import { Observable } from "rxjs";

export abstract class AuthRepository {
  abstract signUp(user: SignUp): Observable<Tokens>;
  abstract signIn(user: SignIn): Observable<Tokens>;
}
