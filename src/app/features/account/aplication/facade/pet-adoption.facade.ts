import { inject, Injectable } from "@angular/core";
import { PetAdoption } from "@features/account/core/interface/pet-adoption.interface";
import { PetAdoptionRepository } from "@features/account/domain/repository/pet-adoption.repository";

@Injectable()
export class PetAdoptionFacade {
  petAdoption: PetAdoptionRepository = inject(PetAdoptionRepository);

  getAllPetsAdoption() {
    return this.petAdoption.getAllPetsAdoption();
  }

  getPetAdoption(id: number) {
    return this.petAdoption.getPetAdoption(id);
  }

  createPetAdoption(pet: PetAdoption) {
    return this.petAdoption.createPetAdoption(pet);
  }

  updatePetAdoption(id: number, pet: PetAdoption) {
    return this.petAdoption.updatePetAdoption(id, pet);
  }

  deletePetAdoption(id: number) {
    return this.petAdoption.deletePetAdoption(id);
  }
}
