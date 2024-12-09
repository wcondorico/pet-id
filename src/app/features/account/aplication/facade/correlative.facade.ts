import { inject, Injectable } from '@angular/core';
import { CorrelativeRepository } from '@features/account/domain/repository/correlative.repository';

@Injectable()
export class CorrelativeFacade {
  correlative = inject(CorrelativeRepository);

  getAllGender() {
    return this.correlative.getAllGender();
  }

  getAllSpecies() {
    return this.correlative.getAllSpecies();
  }

  getAllRaces(id: number) {
    return this.correlative.getAllRaces(id);
  }
}
