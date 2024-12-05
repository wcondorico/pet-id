import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TitleComponent } from '@components/title/title.component';
import { ButtonCardComponent } from '@components/card/button-card/button-card.component';
import { OptionsCardComponent } from '@components/card/options-card/options-card.component';
import { OptionCard } from '@components/card/options-card/interfaces/option-card.interface';
import { InputComponent } from '@components/input/input.component';

@Component({
  selector: 'app-profile',
  imports: [ TitleComponent, ButtonCardComponent, OptionsCardComponent, RouterModule, InputComponent ],
  templateUrl: './profile.view.html',
  styleUrl: './profile.view.scss',
})
export class ProfileView {
  options = signal<OptionCard[]>(
    [
      { icon: 'pets', text: 'Mis mascotas', route: 'my-pets' },
      { icon: 'event', text: 'Mis anuncios', route: 'announcement' },
      { icon: 'volunteer_activism', text: 'Adopción', route: 'adoptions'  },
      { icon: 'close', text: 'Eliminar cuenta', route: ''  }
    ]
  );
}
