import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Pet } from "@features/account/core/interface/pet.interface";
import { PetRepository } from "@features/account/domain/repository/pet.repository";
import { TokensService } from "@features/auth/core/stores/tokens.service";
import { Observable } from "rxjs";
import { environment } from "../../../../../../environments/environment.development";

@Injectable()
export class PetHttp extends PetRepository {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly tokensService: TokensService = inject(TokensService);
  url = `${environment.api}/pet`;
  private token = {
    headers: {
      'Authorization': `Bearer ${this.tokensService.accessToken}`
    }
  }

  getAllPets(): Observable<Pet[]>{
    return this.http.get<Pet[]>(this.url, this.token);
  }

  getPet(id: number): Observable<Pet>{
    return this.http.get<Pet>(`${this.url}/${id}`, this.token);
  }

  createPet(pet: Pet): Observable<Pet>{
    return this.http.post<Pet>(this.url, pet, this.token);
  }

  updatePet(id: number, pet: Pet): Observable<Pet>{
    return this.http.put<Pet>(`${this.url}/${id}`, pet, this.token);
  }

  deletePet(id: number): Observable<Pet>{
    return this.http.delete<Pet>(`${this.url}/${id}`, this.token);
  }

}
