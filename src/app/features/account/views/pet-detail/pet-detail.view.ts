import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { PComponent } from '@components/p/p.component';
import { TitleComponent } from '@components/title/title.component';
import { PetFacade } from '@features/account/aplication/facade/pet.facade';
import { Race, Specie } from '@features/account/core/interface/correlative.interface';
import { Pet } from '@features/account/core/interface/pet.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-pet-detail',
  imports: [TitleComponent, ButtonComponent, RouterLink, PComponent],
  templateUrl: './pet-detail.view.html',
  styleUrl: './pet-detail.view.scss'
})
export class PetDetailView implements OnInit{
  private readonly petService: PetFacade = inject(PetFacade)
  private readonly route: ActivatedRoute = inject(ActivatedRoute)

  pet = signal<Pet | null>(null);
  specie = signal<Specie | null>(null)
  race = signal<Race | null>(null)

  ngOnInit(){
    this.route.paramMap
    .pipe(
      switchMap( (params) => {
        const id = params.get('id');
        return this.petService.getPet(Number(id));
      }))
    .subscribe(pet => {
      this.pet.set(pet)
    });
  }
}
