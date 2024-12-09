import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Gender, Race, Specie } from "@features/account/core/interface/correlative.interface";
import { CorrelativeRepository } from "@features/account/domain/repository/correlative.repository";
import { Observable } from "rxjs";
import { environment } from "../../../../../../environments/environment.development";

@Injectable()
export class CorrelativeHttp extends CorrelativeRepository {
  private readonly http: HttpClient = inject(HttpClient);
  url = `${environment.api}/correlative`

  getAllGender(): Observable<Gender[]>{
    return this.http.get<Gender[]>(`${this.url}/gender`);
  }

  getAllSpecies(): Observable<Specie[]>{
    return this.http.get<Specie[]>(`${this.url}/specie`);
  }

  getAllRaces(id: number): Observable<Race[]>{
    return this.http.get<Race[]>(`${this.url}/specie/${id}/race`);
  }

}
