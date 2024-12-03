import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from "../../../../components/button/button.component";
import { PetCardComponent } from "../../../../components/card/pet-card/pet-card.component";
import { TitleComponent } from "../../../../components/title/title.component";
import { Pets } from './pets.interface';
import { PComponent } from '@components/p/p.component';


@Component({
  selector: 'app-my-pets',
  imports: [ButtonComponent, TitleComponent, RouterLink, PetCardComponent, PComponent],
  templateUrl: './my-pets.view.html',
  styleUrl: './my-pets.view.scss'
})
export class MyPetsView {
  pets = signal<Pets[]>([
    {
      img: "images/cachorro.jpg",
      name: "Pepito"
    },
    {
      img: "images/cachorro.jpg",
      name: "Huecito"
    }
  ])

}
