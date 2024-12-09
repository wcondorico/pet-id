import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { User } from "@features/account/core/interface/user.interface";
import { UserRepository } from "@features/account/domain/repository/user.repository";
import { Observable } from "rxjs";
import { environment } from "../../../../../../environments/environment.development";

@Injectable()
export class UserHttp extends UserRepository {
  private readonly http: HttpClient = inject(HttpClient);
  url = `${environment.api}/user`

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  getUser(id: number): Observable<User>{
    return this.http.get<User>(`${this.url}/${id}`);
  }
}
