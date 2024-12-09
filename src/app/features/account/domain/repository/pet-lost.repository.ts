import { PetLost } from "@features/account/core/interface/pet-lost.interface";
import { Observable } from "rxjs";

export abstract class PetLostRepository {
  abstract getAllPetLost(): Observable<PetLost[]>;
  abstract getPetLost(id: number): Observable<PetLost>;
  abstract createPetLost(pet: PetLost): Observable<PetLost>;
  abstract updatePetLost(id: number, pet: PetLost): Observable<PetLost>;
  abstract deletePetLost(id: number): Observable<PetLost>;
}
