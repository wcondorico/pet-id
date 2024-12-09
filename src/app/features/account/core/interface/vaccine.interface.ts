export interface Vaccine {
  id?: number;
  name: string;
  date: string;
  nextDueDate: string;
  note: string;
  petId?: number | null;
  petAdoptionId?: number | null;
}
