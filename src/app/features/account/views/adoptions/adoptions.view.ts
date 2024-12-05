import { Component, signal } from '@angular/core';
import { InputComponent } from "../../../../components/input/input.component";
import { Pets } from '../my-pets/pets.interface';
import { PetCardComponent } from "../../../../components/card/pet-card/pet-card.component";
import { TitleComponent } from "../../../../components/title/title.component";

@Component({
  selector: 'app-adoptions',
  imports: [InputComponent, PetCardComponent, TitleComponent],
  templateUrl: './adoptions.view.html',
  styleUrl: './adoptions.view.scss'
})
export class AdoptionsView {
  petsAdoption = signal<Pets[]>([
    {
      img: "images/cachorro.jpg",
      name: "Pe2222"
    },
    {
      img: "images/cachorro.jpg",
      name: "Hue2222"
    },
    {
      img: "images/cachorro.jpg",
      name: "pollito11"
    },
    {
      img: "images/cachorro.jpg",
      name: "pollito12"
    },
    {
      img: "images/cachorro.jpg",
      name: "pollito13"
    }
  ])
}
