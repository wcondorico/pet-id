import { Pet } from "@features/account/core/interface/pet.interface";
import { Observable } from "rxjs";

export abstract class PetRepository {
  abstract getAllPets(): Observable<Pet[]>;
}
