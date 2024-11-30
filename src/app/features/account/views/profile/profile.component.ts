import { Component, signal } from '@angular/core';
import { CardButtonComponent } from '../../../../components/card/card-button/card-button.component';
import { CardOptionsComponent } from '../../../../components/card/card-options/card-options.component';
import { TitleComponent } from '../../../../components/title/title.component';
import { AccountOption } from '../../core/interfaces/account.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [ TitleComponent, CardButtonComponent, CardOptionsComponent, RouterModule ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  options = signal<AccountOption[]>(
    [
      { icon: 'pets', text: 'Mis mascotas' },
      { icon: 'event', text: 'Mis anuncios' },
      { icon: 'volunteer_activism', text: 'Adopción' },
      { icon: 'close', text: 'Eliminar cuenta' }
    ]
  );
}
