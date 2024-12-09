import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Vaccine } from "@features/account/core/interface/vaccine.interface";
import { VaccineRepository } from "@features/account/domain/repository/vaccine.repository";
import { Observable } from "rxjs";
import { environment } from "../../../../../../environments/environment.development";

@Injectable()
export class VaccineHttp extends VaccineRepository {
  private readonly http: HttpClient = inject(HttpClient);
  url = `${environment.api}/pet`

  getAllVaccines(idPet: number): Observable<Vaccine[]> {
    return this.http.get<Vaccine[]>(`${this.url}/${idPet}/vaccine`);
  }
  getVaccine(idPet: number, idVaccine: number): Observable<Vaccine> {
    return this.http.get<Vaccine>(`${this.url}/${idPet}/vaccine/${idVaccine}`);
  }
  createVaccine(idPet: number, vaccine: Vaccine): Observable<Vaccine> {
    return this.http.post<Vaccine>(`${this.url}/${idPet}/vaccine`, vaccine);
  }
  updateVaccine(idPet: number, idVaccine: number, vaccine: Vaccine): Observable<Vaccine> {
    return this.http.put<Vaccine>(`${this.url}/${idPet}/vaccine/${idVaccine}`, vaccine);
  }
  deleteVaccine(idPet: number, idVaccine: number): Observable<Vaccine> {
    return this.http.delete<Vaccine>(`${this.url}/${idPet}/vaccine/${idVaccine}`);
  }
}
