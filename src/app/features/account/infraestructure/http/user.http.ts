import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { User } from "@features/account/core/interface/user.interface";
import { UserRepository } from "@features/account/domain/repository/user.repository";
import { Observable } from "rxjs";
import { environment } from "../../../../../../environments/environment.development";
import { TokensService } from "@features/auth/core/stores/tokens.service";

@Injectable()
export class UserHttp extends UserRepository {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly tokensService: TokensService = inject(TokensService);
  url = `${environment.api}/user`
  private token = {
    headers: {
      'Authorization': `Bearer ${this.tokensService.accessToken}`
    }
  }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url, this.token);
  }

  getUser(): Observable<User>{
    return this.http.get<User>(`${this.url}/profile`, this.token);
  }
}
