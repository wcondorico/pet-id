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
  url = `${environment.api}/pet`

  getAllPets(): Observable<Pet[]>{
    return this.http.get<Pet[]>(this.url, {
      headers: {
        'Authorization': `Bearer ${this.tokensService.accessToken}`
      }
    });
  }

  getPet(id: number): Observable<Pet>{
    return this.http.get<Pet>(`${this.url}/${id}`);
  }

  createPet(pet: Pet): Observable<Pet>{
    return this.http.post<Pet>(this.url, pet);
  }

  updatePet(id: number, pet: Pet): Observable<Pet>{
    return this.http.put<Pet>(`${this.url}/${id}`, pet);
  }

  deletePet(id: number): Observable<Pet>{
    return this.http.delete<Pet>(`${this.url}/${id}`);
  }

}
