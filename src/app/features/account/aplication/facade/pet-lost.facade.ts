import { inject, Injectable } from "@angular/core";
import { PetLost } from "@features/account/core/interface/pet-lost.interface";
import { PetLostRepository } from "@features/account/domain/repository/pet-lost.repository";

@Injectable()
export class PetLostFacade {
  petLost: PetLostRepository = inject(PetLostRepository);

  getAllPetLost() {
    return this.petLost.getAllPetLost();
  }

  getPetLost(id: number) {
    return this.petLost.getPetLost(id);
  }

  createPetLost(pet: PetLost) {
    return this.petLost.createPetLost(pet);
  }

  updatePetLost(id: number, pet: PetLost) {
    return this.petLost.updatePetLost(id, pet);
  }

  deletePetLost(id: number) {
    return this.petLost.deletePetLost(id);
  }
}
