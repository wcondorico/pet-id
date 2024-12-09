import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { PetLost } from "@features/account/core/interface/pet-lost.interface";
import { PetLostRepository } from "@features/account/domain/repository/pet-lost.repository";
import { Observable } from "rxjs";
import { environment } from "../../../../../../environments/environment.development";

@Injectable()
export class PetLostHttp extends PetLostRepository {
  private readonly http: HttpClient = inject(HttpClient);
  url = `${environment.api}/pet-loss`

  getAllPetLost(): Observable<PetLost[]> {
    return this.http.get<PetLost[]>(this.url)
  }
  getPetLost(id: number): Observable<PetLost> {
    return this.http.get<PetLost>(`${this.url}/${id}`)
  }
  createPetLost(pet: PetLost): Observable<PetLost> {
    return this.http.post<PetLost>(this.url, pet)
  }
  updatePetLost(id: number, pet: PetLost): Observable<PetLost> {
    return this.http.put<PetLost>(`${this.url}/${id}`, pet)
  }
  deletePetLost(id: number): Observable<PetLost> {
    return this.http.get<PetLost>(`${this.url}/${id}`)
  }



}
