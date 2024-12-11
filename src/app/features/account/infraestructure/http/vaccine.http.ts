import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Vaccine } from "@features/account/core/interface/vaccine.interface";
import { VaccineRepository } from "@features/account/domain/repository/vaccine.repository";
import { Observable } from "rxjs";
import { environment } from "../../../../../../environments/environment.development";
import { TokensService } from "@features/auth/core/stores/tokens.service";

@Injectable()
export class VaccineHttp extends VaccineRepository {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly tokensService: TokensService = inject(TokensService);
  url = `${environment.api}/pet`;
  private token = {
    headers: {
      'Authorization': `Bearer ${this.tokensService.accessToken}`
    }
  }

  getAllVaccines(idPet: number): Observable<Vaccine[]> {
    return this.http.get<Vaccine[]>(`${this.url}/${idPet}/vaccine`, this.token);
  }
  getVaccine(idPet: number, idVaccine: number): Observable<Vaccine> {
    return this.http.get<Vaccine>(`${this.url}/${idPet}/vaccine/${idVaccine}`, this.token);
  }
  createVaccine(idPet: number, vaccine: Vaccine): Observable<Vaccine> {
    return this.http.post<Vaccine>(`${this.url}/${idPet}/vaccine`, vaccine, this.token);
  }
  updateVaccine(idPet: number, idVaccine: number, vaccine: Vaccine): Observable<Vaccine> {
    return this.http.put<Vaccine>(`${this.url}/${idPet}/vaccine/${idVaccine}`, vaccine, this.token);
  }
  deleteVaccine(idPet: number, idVaccine: number): Observable<Vaccine> {
    return this.http.delete<Vaccine>(`${this.url}/${idPet}/vaccine/${idVaccine}`, this.token);
  }
}
