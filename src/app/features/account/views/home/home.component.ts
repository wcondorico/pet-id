import { Component, signal } from '@angular/core';
import { CardButtonComponent } from '../../../../components/card/card-button/card-button.component';
import { CardOptionsComponent } from '../../../../components/card/card-options/card-options.component';
import { TitleComponent } from '../../../../components/title/title.component';
import { AccountOption } from '../../core/interfaces/account.interface';

@Component({
  selector: 'app-home',
  imports: [ TitleComponent, CardButtonComponent, CardOptionsComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  options = signal<AccountOption[]>(
    [
      { icon: 'pets', text: 'Mis mascotas' },
      { icon: 'event', text: 'Mis anuncios' },
      { icon: 'volunteer_activism', text: 'Adopción' },
      { icon: 'close', text: 'Eliminar cuenta' }
    ]
  );
}
