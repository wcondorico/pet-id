import { Pet } from "@features/account/core/interface/pet.interface";
import { Observable } from "rxjs";

export abstract class PetRepository {
  abstract getAllPets(): Observable<Pet[]>;
  abstract getPet(id: number): Observable<Pet>;
  abstract createPet(pet: Pet): Observable<Pet>;
  abstract updatePet(id: number, pet: Pet): Observable<Pet>;
  abstract deletePet(id: number): Observable<Pet>;
}
