import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Gender, Race, Specie } from "@features/account/core/interface/correlative.interface";
import { CorrelativeRepository } from "@features/account/domain/repository/correlative.repository";
import { Observable } from "rxjs";
import { environment } from "../../../../../../environments/environment.development";
import { TokensService } from "@features/auth/core/stores/tokens.service";

@Injectable()
export class CorrelativeHttp extends CorrelativeRepository {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly tokensService: TokensService = inject(TokensService);
  url = `${environment.api}/correlative`;
  private token = {
    headers: {
      'Authorization': `Bearer ${this.tokensService.accessToken}`
    }
  }

  getAllGender(): Observable<Gender[]>{
    return this.http.get<Gender[]>(`${this.url}/gender`, this.token);
  }

  getAllSpecies(): Observable<Specie[]>{
    return this.http.get<Specie[]>(`${this.url}/specie`, this.token);
  }

  getAllRaces(id: number): Observable<Race[]>{
    return this.http.get<Race[]>(`${this.url}/specie/${id}/race`, this.token);
  }

}
