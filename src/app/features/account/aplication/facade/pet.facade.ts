import { inject, Injectable } from '@angular/core';
import { PetRepository } from '@features/account/domain/repository/pet.repository';

@Injectable()
export class PetFacade {
  pet = inject(PetRepository);

  getAllPets() {
    return this.pet.getAllPets();
  }
}
