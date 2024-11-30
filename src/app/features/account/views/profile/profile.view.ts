import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TitleComponent } from '@components/title/title.component';
import { ButtonCardComponent } from '@components/card/button-card/button-card.component';
import { OptionsCardComponent } from '@components/card/card-options/options-card.component';
import { CardOption } from '@components/card/card-options/interfaces/card-option.interface';
import { InputComponent } from '@components/input/input.component';

@Component({
  selector: 'app-profile',
  imports: [ TitleComponent, ButtonCardComponent, OptionsCardComponent, RouterModule, InputComponent ],
  templateUrl: './profile.view.html',
  styleUrl: './profile.view.scss',
})
export class ProfileView {
  options = signal<CardOption[]>(
    [
      { icon: 'pets', text: 'Mis mascotas' },
      { icon: 'event', text: 'Mis anuncios' },
      { icon: 'volunteer_activism', text: 'Adopción' },
      { icon: 'close', text: 'Eliminar cuenta' }
    ]
  );
}
