import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokensService {
  private readonly _accessToken = new BehaviorSubject<string>('');
  private readonly _refreshToken = new BehaviorSubject<string>('');

  get accessToken$() {
    return this._accessToken.asObservable();
  }

  get refreshToken$() {
    return this._refreshToken.asObservable();
  }

  get accessToken() {
    return this._accessToken.value;
  }

  set accessToken(token: string) {
    this._accessToken.next(token);
  }

  get refreshToken() {
    return this._refreshToken.value;
  }

  set refreshToken(token: string) {
    this._refreshToken.next(token);
  }
}
