import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ButtonComponent } from '@components/button/button.component';
import { InputComponent } from '@components/form/input/input.component';
import { TitleComponent } from '@components/title/title.component';
import { CorrelativeFacade } from '@features/account/aplication/facade/correlative.facade';
import { Race, Specie } from '@features/account/core/interface/correlative.interface';

@Component({
  selector: 'app-new-pet',
  imports: [
    InputComponent,
    TitleComponent,
    ButtonComponent,
    ReactiveFormsModule,
    CommonModule,
    MatRadioModule,
    MatFormFieldModule, MatSelectModule, MatInputModule,
    CommonModule,
    MatCheckboxModule
],
  templateUrl: './new-pet.view.html',
  styleUrl: './new-pet.view.scss',
})
export class NewPetView implements OnInit{
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly correlatives: CorrelativeFacade = inject(CorrelativeFacade);
  species = signal<Specie[]>([]);
  races = signal<Race[]>([]);
  specieSelected = signal<string>('');
  raceSelected = signal<string>('');
  specieMenu = signal<boolean>(false);
  raceMenu = signal<boolean>(false);


  test = [
    {id: 'steak-0', specie: 'Steak'},
    {id: 'pizza-1', specie: 'Pizza'},
    {id: 'tacos-2', specie: 'Tacos'},
  ];

  ngOnInit() {
    this.getSpecies();
    this.getRaces();
  }

  loginForm = this.fb.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    age: ['', Validators.required],
    description: ['', Validators.required],
    image: ['', Validators.required],
    lostStatus: ['', Validators.required],
    sterilizedStatus: ['', Validators.required],
    handicappedStatus: ['', Validators.required],
    genderId: ['', Validators.required],
    specieId: ['', Validators.required],
    raceId: ['', Validators.required],
  });

  onSubmit() {
    console.log(1);
  }

  getSpecies() {
    this.correlatives.getAllSpecies()
    .subscribe(species => {
      console.log(species);
      this.species.set(species)
    })
  }

  getRaces() {
    /*this.correlatives.getAllRaces()
    .subscribe(races => {
      console.log(races);
      this.races.set(races)
    })*/
  }

  selectSpecie(option: string) {
    this.specieSelected.set(option);
    this.specieMenu.set(false)
  }

  selectRace(option: string) {
    this.raceSelected.set(option);
    this.raceMenu.set(false)
  }

  toggleMenuSpecie(){
    this.specieMenu.set(!this.specieMenu());
  }
  toggleMenuRace(){
    this.raceMenu.set(!this.raceMenu());
  }
}
