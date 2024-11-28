import { Component, signal } from '@angular/core';
import { TitleComponent } from '../../../../core/components/title/title.component';
import { CardButtonComponent } from '../../../../core/components/card/card-button/card-button.component';
import { CardOptionsComponent } from '../../../../core/components/card/card-options/card-options.component';

@Component({
  selector: 'app-home',
  imports: [TitleComponent, CardButtonComponent, CardOptionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  list = signal([
    {icon:'pets', text:'Mis mascotas'},
    {icon:'pets', text:'Anuncios'},
    {icon:'pets', text:'Adopción'},
    {icon:'pets', text:'Eliminar cuenta'}
  ]);
}
