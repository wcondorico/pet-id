import { Ad } from "@features/account/core/interface/ad.interface";
import { Observable } from "rxjs";

export abstract class AdRepository {
  abstract getAllAds(): Observable<Ad[]>;
  abstract getAd(id: number): Observable<Ad>;
  abstract createAd(pet: Ad): Observable<Ad>;
  abstract updateAd(id: number, pet: Ad): Observable<Ad>;
  abstract deleteAd(id: number): Observable<Ad>;
}
