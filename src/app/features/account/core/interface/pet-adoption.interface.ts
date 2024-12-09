export interface PetAdoption {
  id?: number;
  name: string;
  lastName: string;
  age: number;
  description: string;
  image: string;
  adoptionStatus: false;
  sterilizedStatus: false;
  handicappedStatus: false;
  userId?: number;
  genderId: number;
  specieId: number;
  raceId: number;
}
