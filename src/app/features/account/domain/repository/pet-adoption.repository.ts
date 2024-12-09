import { PetAdoption } from "@features/account/core/interface/pet-adoption.interface";
import { Observable } from "rxjs";

export abstract class PetAdoptionRepository {
  abstract getAllPetsAdoption(): Observable<PetAdoption[]>;
  abstract getPetAdoption(id: number): Observable<PetAdoption>;
  abstract createPetAdoption(pet: PetAdoption): Observable<PetAdoption>;
  abstract updatePetAdoption(id: number, pet: PetAdoption): Observable<PetAdoption>;
  abstract deletePetAdoption(id: number): Observable<PetAdoption>;
}
