export interface Gender {
  id: number;
  name: string;
}

export interface Specie {
  id: number;
  specie: string;
}

export interface Race {
  id: number;
  race: string;
  specieId: number
}
