import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { PetAdoption } from "@features/account/core/interface/pet-adoption.interface";
import { PetAdoptionRepository } from "@features/account/domain/repository/pet-adoption.repository";
import { Observable } from "rxjs";
import { environment } from "../../../../../../environments/environment.development";
import { TokensService } from "@features/auth/core/stores/tokens.service";

@Injectable()
export class PetAdoptionHttp extends PetAdoptionRepository {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly tokensService: TokensService = inject(TokensService);
  url = `${environment.api}/pet-adoption`;
  private token = {
    headers: {
      'Authorization': `Bearer ${this.tokensService.accessToken}`
    }
  }

  getAllPetsAdoption(): Observable<PetAdoption[]> {
    return this.http.get<PetAdoption[]>(this.url, this.token)
  }
  getPetAdoption(id: number): Observable<PetAdoption> {
    return this.http.get<PetAdoption>(`${this.url}/${id}`, this.token)
  }
  createPetAdoption(pet: PetAdoption): Observable<PetAdoption> {
    return this.http.post<PetAdoption>(this.url, pet, this.token)
  }
  updatePetAdoption(id: number, pet: PetAdoption): Observable<PetAdoption> {
    return this.http.put<PetAdoption>(`${this.url}/${id}`, pet, this.token)
  }
  deletePetAdoption(id: number): Observable<PetAdoption> {
    return this.http.delete<PetAdoption>(`${this.url}/${id}`, this.token)
  }



}
