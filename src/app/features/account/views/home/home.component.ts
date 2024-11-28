import { Component } from '@angular/core';
import { TitleComponent } from '../../../../core/components/title/title.component';
import { CardButtonComponent } from '../../../../core/components/card/card-button/card-button.component';

@Component({
  selector: 'app-home',
  imports: [TitleComponent,CardButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
