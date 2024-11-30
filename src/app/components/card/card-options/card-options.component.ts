import { Component, input } from '@angular/core';
import { SubtitleComponent } from '../../subtitle/subtitle.component';
import { AccountOption } from '../../../features/account/core/interfaces/account.interface';

@Component({
  selector: 'app-card-options',
  imports: [ SubtitleComponent ],
  templateUrl: './card-options.component.html',
  styleUrl: './card-options.component.scss'
})
export class CardOptionsComponent {
  items = input.required<AccountOption[]>();
  title = input.required<string>();
}
