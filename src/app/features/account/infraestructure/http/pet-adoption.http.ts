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

  getAllPetsAdoption(): Observable<PetAdoption[]> {
    return this.http.get<PetAdoption[]>(this.url, {
      headers: {
        'Authorization': `Bearer ${this.tokensService.accessToken}`
      }
    })
  }
  getPetAdoption(id: number): Observable<PetAdoption> {
    return this.http.get<PetAdoption>(`${this.url}/${id}`)
  }
  createPetAdoption(pet: PetAdoption): Observable<PetAdoption> {
    return this.http.post<PetAdoption>(this.url, pet)
  }
  updatePetAdoption(id: number, pet: PetAdoption): Observable<PetAdoption> {
    return this.http.put<PetAdoption>(`${this.url}/${id}`, pet)
  }
  deletePetAdoption(id: number): Observable<PetAdoption> {
    return this.http.delete<PetAdoption>(`${this.url}/${id}`)
  }



}
