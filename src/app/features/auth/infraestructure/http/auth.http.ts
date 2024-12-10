import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { SignIn, SignUp, Tokens } from "@features/auth/core/interfaces/auth.interface";
import { AuthRepository } from "@features/auth/domain/repository/auth.repository";
import { Observable } from "rxjs";
import { environment } from "../../../../../../environments/environment.development";

@Injectable()
export class AuthHttp extends AuthRepository {
  private readonly http: HttpClient = inject(HttpClient);
  url = `${environment.api}/auth`

  signUp(user: SignUp): Observable<Tokens>{
    return this.http.post<Tokens>(`${this.url}/sign-up`, user);
  }

  signIn(user: SignIn): Observable<Tokens>{
    return this.http.post<Tokens>(`${this.url}/sign-in`, user);
  }

}
