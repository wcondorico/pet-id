import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TitleComponent } from '@components/title/title.component';
import { ButtonCardComponent } from '@components/card/button-card/button-card.component';
import { OptionsCardComponent } from '@components/card/card-options/options-card.component';
import { CardOption } from '@components/card/card-options/interfaces/card-option.interface';

@Component({
  selector: 'app-profile',
  imports: [ TitleComponent, ButtonCardComponent, OptionsCardComponent, RouterModule ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  options = signal<CardOption[]>(
    [
      { icon: 'pets', text: 'Mis mascotas' },
      { icon: 'event', text: 'Mis anuncios' },
      { icon: 'volunteer_activism', text: 'Adopción' },
      { icon: 'close', text: 'Eliminar cuenta' }
    ]
  );
}
