/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { InputComponent } from '@components/form/input/input.component';
import { TitleComponent } from '@components/title/title.component';
import { CorrelativeFacade } from '@features/account/aplication/facade/correlative.facade';
import { PetFacade } from '@features/account/aplication/facade/pet.facade';
import { Race, Specie } from '@features/account/core/interface/correlative.interface';
import { Pet } from '@features/account/core/interface/pet.interface';

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
export class NewPetView implements OnInit {
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly correlatives: CorrelativeFacade = inject(CorrelativeFacade);
  private readonly petService: PetFacade = inject(PetFacade);
  private readonly router: Router = inject(Router);

  species = signal<Specie[]>([]);
  races = signal<Race[]>([]);
  specieSelected = signal<string>('');
  specieIdSelected = signal<number>(0);
  raceSelected = signal<string>('');
  specieMenu = signal<boolean>(false);
  raceMenu = signal<boolean>(false);


  especie = [
    { id: 0, specie: 'perro' },
    { id: 1, specie: 'gato' },
    { id: 2, specie: 'pajaro' },
  ];
  raza = [
    { id: 0, specie: 'siames' },
    { id: 1, specie: 'pastor' },
    { id: 2, specie: 'alvino' },
  ];

  ngOnInit() {
    this.getSpecies();
  }

  loginForm = this.fb.group({
    name: ['', [Validators.required, this.onlyLetters]],
    lastName: ['', [Validators.required, this.onlyLetters]],
    specieId: ['', Validators.required],
    raceId: ['', Validators.required],
    age: ['', [Validators.required, this.onlyNumbers]],
    genderId: ['', Validators.required],
    sterilizedStatus: [false],
    handicappedStatus: [false],
    lostStatus: [false],
    description: [''],
    image: ['/images/cachorro.jpg', Validators.required],
  });

  getSpecies() {
    this.correlatives.getAllSpecies()
      .subscribe(species => {
        this.species.set(species)
      })
  }

  getRaces(id: number) {
    this.correlatives.getAllRaces(id)
      .subscribe(races => {
        this.races.set(races)
      })
  }

  selectSpecie(option: string, id: number) {
    this.loginForm.controls['specieId'].setValue(id.toString());
    this.specieSelected.set(option);
    this.specieIdSelected.set(id);
    this.specieMenu.set(false);
    this.getRaces(id);
  }

  selectRace(option: string, id: number) {
    this.loginForm.controls['raceId'].setValue(id.toString());
    this.raceSelected.set(option);
    this.raceMenu.set(false)
  }

  toggleMenuSpecie() {
    this.specieMenu.set(!this.specieMenu());
  }
  toggleMenuRace() {
    this.raceMenu.set(!this.raceMenu());
  }

  onSubmit() {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      const pet = signal<Pet>({
        name: this.loginForm.value.name || '',
        lastName: this.loginForm.value.lastName || '',
        specieId: Number(this.loginForm.value.specieId),
        raceId: Number(this.loginForm.value.raceId),
        age: Number(this.loginForm.value.age),
        genderId: Number(this.loginForm.value.genderId),
        sterilizedStatus: this.loginForm.value.sterilizedStatus || false,
        handicappedStatus: this.loginForm.value.handicappedStatus || false,
        lostStatus: this.loginForm.value.lostStatus || false,
        description: this.loginForm.value.description || '',
        image: this.loginForm.value.image || '',
      })

      this.petService.createPet(pet()).subscribe({
        next: pet => {
          console.log(pet);
          this.router.navigate(['/account/my-pets'])
        },
        error: err => console.log(err)
      })
    }
  }

  onlyLetters(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value || '';
    const regex = /^[A-Za-z]+(\s[A-Za-z]+)*$/;
    if (value && !regex.test(value)) {
      return { onlyLetters: true };
    }
    return null;
  }
  onlyNumbers(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    if (!value) {
      return null;
    }
    const isValid = /^[0-9]+$/.test(value);
    return isValid ? null : { onlyNumbers: true };
  }

}
