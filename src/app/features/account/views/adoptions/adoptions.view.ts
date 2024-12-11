import { Component, inject, OnInit, signal } from '@angular/core';
import { PetAdoptionFacade } from '@features/account/aplication/facade/pet-adoption.facade';
import { PetAdoption } from '@features/account/core/interface/pet-adoption.interface';
import { PetCardComponent } from "../../../../components/card/pet-card/pet-card.component";
import { InputComponent } from '@components/form/input/input.component';
import { TitleComponent } from "../../../../components/title/title.component";
import { ButtonComponent } from '@components/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-adoptions',
  imports: [InputComponent, PetCardComponent, TitleComponent, ButtonComponent, RouterLink],
  templateUrl: './adoptions.view.html',
  styleUrl: './adoptions.view.scss'
})
export class AdoptionsView implements OnInit{
  private readonly petAdoptService: PetAdoptionFacade = inject(PetAdoptionFacade);
  petsAdoptList = signal<PetAdoption[]>([]);

  ngOnInit(): void {
    this.getAllPets();
  }

  getAllPets() {
    this.petAdoptService.getAllPetsAdoption().subscribe({
      next: (petsAdopt) => this.petsAdoptList.set(petsAdopt),
      error: (err) => console.log(err)
    })
  }
}
