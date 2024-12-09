import { inject, Injectable } from "@angular/core";
import { Vaccine } from "@features/account/core/interface/vaccine.interface";
import { VaccineRepository } from "@features/account/domain/repository/vaccine.repository";

@Injectable()
export class VaccineFacade {
  vaccine: VaccineRepository = inject(VaccineRepository);

  getAllVaccines(idPet: number) {
    return this.vaccine.getAllVaccines(idPet);
  }
  getVaccine(idPet: number, idVaccine: number) {
    return this.vaccine.getVaccine(idPet, idVaccine);
  }
  createVaccine(idPet: number, vaccine: Vaccine) {
    return this.vaccine.createVaccine(idPet, vaccine);
  }
  updateVaccine(idPet: number, idVaccine: number, vaccine: Vaccine) {
    return this.vaccine.updateVaccine(idPet, idVaccine, vaccine);
  }
  deleteVaccine(idPet: number, idVaccine: number) {
    return this.vaccine.deleteVaccine(idPet, idVaccine);
  }
}
