import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../interface/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _accessUser = new BehaviorSubject<User | null>(null);

  get accessUser$() {
    return this._accessUser.asObservable();
  }

  set accessUser$(user: Observable<User | null>) {
    this._accessUser.subscribe(user => user);
  }

  get accessUser() {
    return this._accessUser.value;
  }

  set accessUser(user: User | null) {
    this._accessUser.next(user);
  }
}
