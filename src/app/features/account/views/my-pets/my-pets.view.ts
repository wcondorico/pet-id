import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PComponent } from '@components/p/p.component';
import { PetFacade } from '@features/account/aplication/facade/pet.facade';
import { Pet } from '@features/account/core/interface/pet.interface';
import { ButtonComponent } from "../../../../components/button/button.component";
import { PetCardComponent } from "../../../../components/card/pet-card/pet-card.component";
import { TitleComponent } from "../../../../components/title/title.component";
import { Pets } from './pets.interface';


@Component({
  selector: 'app-my-pets',
  imports: [ButtonComponent, TitleComponent, RouterLink, PetCardComponent, PComponent],
  templateUrl: './my-pets.view.html',
  styleUrl: './my-pets.view.scss'
})
export class MyPetsView implements OnInit{
  private readonly petService: PetFacade = inject(PetFacade)
  petsList = signal<Pet[]>([]);

  ngOnInit() {
    this.petService.getAllPets().subscribe({
      next: (pets) => {
        this.petsList.set(pets);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }


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
