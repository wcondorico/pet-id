import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { PetLost } from "@features/account/core/interface/pet-lost.interface";
import { PetLostRepository } from "@features/account/domain/repository/pet-lost.repository";
import { Observable } from "rxjs";
import { environment } from "../../../../../../environments/environment.development";
import { TokensService } from "@features/auth/core/stores/tokens.service";

@Injectable()
export class PetLostHttp extends PetLostRepository {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly tokensService: TokensService = inject(TokensService);
  url = `${environment.api}/pet-loss`;
  private token = {
    headers: {
      'Authorization': `Bearer ${this.tokensService.accessToken}`
    }
  }

  getAllPetLost(): Observable<PetLost[]> {
    return this.http.get<PetLost[]>(this.url, this.token)
  }
  getPetLost(id: number): Observable<PetLost> {
    return this.http.get<PetLost>(`${this.url}/${id}`, this.token)
  }
  createPetLost(pet: PetLost): Observable<PetLost> {
    return this.http.post<PetLost>(this.url, pet, this.token)
  }
  updatePetLost(id: number, pet: PetLost): Observable<PetLost> {
    return this.http.put<PetLost>(`${this.url}/${id}`, pet, this.token)
  }
  deletePetLost(id: number): Observable<PetLost> {
    return this.http.get<PetLost>(`${this.url}/${id}`, this.token)
  }



}
