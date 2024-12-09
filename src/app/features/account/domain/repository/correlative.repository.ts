import { Gender, Race, Specie } from "@features/account/core/interface/correlative.interface";
import { Observable } from "rxjs";

export abstract class CorrelativeRepository {
  abstract getAllGender(): Observable<Gender[]>;
  abstract getAllSpecies(): Observable<Specie[]>;
  abstract getAllRaces(id: number): Observable<Race[]>;
}
