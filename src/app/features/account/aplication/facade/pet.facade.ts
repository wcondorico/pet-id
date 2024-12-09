import { inject, Injectable } from '@angular/core';
import { Pet } from '@features/account/core/interface/pet.interface';
import { PetRepository } from '@features/account/domain/repository/pet.repository';

@Injectable()
export class PetFacade {
  pet = inject(PetRepository);

  getAllPets() {
    return this.pet.getAllPets();
  }

  getPet(id: number) {
    return this.pet.getPet(id);
  }

  createPet(pet: Pet) {
    return this.pet.createPet(pet);
  }

  updatePet(id: number, pet: Pet) {
    return this.pet.updatePet(id, pet);
  }

  deletePet(id: number) {
    return this.pet.deletePet(id);
  }
}
