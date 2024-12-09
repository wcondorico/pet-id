import { Vaccine } from "@features/account/core/interface/vaccine.interface";
import { Observable } from "rxjs";

export abstract class VaccineRepository {
  abstract getAllVaccines(idPet: number): Observable<Vaccine[]>;
  abstract getVaccine(idPet: number, idVaccine: number): Observable<Vaccine>;
  abstract createVaccine(idPet: number, vaccine: Vaccine): Observable<Vaccine>;
  abstract updateVaccine(idPet: number, idVaccine: number, vaccine: Vaccine): Observable<Vaccine>;
  abstract deleteVaccine(idPet: number, idVaccine: number): Observable<Vaccine>;
}
