import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { PComponent } from '@components/p/p.component';
import { TitleComponent } from '@components/title/title.component';
import { PetAdoptionFacade } from '@features/account/aplication/facade/pet-adoption.facade';
import { PetAdoption } from '@features/account/core/interface/pet-adoption.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-adoption-detail',
  imports: [TitleComponent, ButtonComponent, RouterLink, PComponent],
  templateUrl: './adoption-detail.component.html',
  styleUrl: './adoption-detail.component.scss'
})
export class AdoptionDetailComponent implements OnInit{
  private readonly petAdoptionService: PetAdoptionFacade = inject(PetAdoptionFacade)
  private readonly route: ActivatedRoute = inject(ActivatedRoute)

  petAdoption = signal<PetAdoption | null>(null);

  ngOnInit(){
    this.route.paramMap
    .pipe(
      switchMap( (params) => {
        const id = params.get('id');
        return this.petAdoptionService.getPetAdoption(Number(id));
      }))
    .subscribe(petAdopt => {
      this.petAdoption.set(petAdopt)
    });
  }
}
