import { Component, input } from '@angular/core';
import { SubtitleComponent } from '@components/subtitle/subtitle.component';

class AccountOption {
}

@Component({
  selector: 'app-options-card',
  imports: [ SubtitleComponent ],
  templateUrl: './options-card.component.html',
  styleUrl: './options-card.component.scss'
})
export class OptionsCardComponent {
  items = input.required<AccountOption[]>();
  title = input.required<string>();
}
