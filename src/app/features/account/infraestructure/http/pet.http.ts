import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Pet } from "@features/account/core/interface/pet.interface";
import { PetRepository } from "@features/account/domain/repository/pet.repository";
import { Observable } from "rxjs";
import { environment } from "../../../../../../environments/environment.development";

@Injectable()
export class PetHttp extends PetRepository {
  private readonly http: HttpClient = inject(HttpClient);
  url = `${environment.api}/pet`

  getAllPets(): Observable<Pet[]>{
    return this.http.get<Pet[]>(this.url);
  }
}
