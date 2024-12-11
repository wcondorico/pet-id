import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Ad } from "@features/account/core/interface/ad.interface";
import { AdRepository } from "@features/account/domain/repository/ad.repository";
import { Observable } from "rxjs";
import { environment } from "../../../../../../environments/environment.development";
import { TokensService } from "@features/auth/core/stores/tokens.service";

@Injectable()
export class AdHttp extends AdRepository {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly tokensService: TokensService = inject(TokensService);
  url = `${environment.api}/ad`

  getAllAds(): Observable<Ad[]>{
    return this.http.get<Ad[]>(this.url, {
      headers: {
        'Authorization': `Bearer ${this.tokensService.accessToken}`
      }
    });
  }

  getAd(id: number): Observable<Ad>{
    return this.http.get<Ad>(`${this.url}/${id}`);
  }

  createAd(ad: Ad): Observable<Ad>{
    return this.http.post<Ad>(this.url, ad);
  }

  updateAd(id: number, ad: Ad): Observable<Ad>{
    return this.http.put<Ad>(`${this.url}/${id}`, ad);
  }

  deleteAd(id: number): Observable<Ad>{
    return this.http.delete<Ad>(`${this.url}/${id}`);
  }

}
