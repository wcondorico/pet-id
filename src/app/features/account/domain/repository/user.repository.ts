import { User } from "@features/account/core/interface/user.interface";
import { Observable } from "rxjs";

export abstract class UserRepository {
  abstract getAllUsers(): Observable<User[]>;
  abstract getUser(id: number): Observable<User>;
}
