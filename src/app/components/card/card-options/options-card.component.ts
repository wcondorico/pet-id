import { Component, input } from '@angular/core';
import { SubtitleComponent } from '@components/subtitle/subtitle.component';
import { CardOption } from '@components/card/card-options/interfaces/card-option.interface';

@Component({
  selector: 'app-options-card',
  imports: [ SubtitleComponent ],
  templateUrl: './options-card.component.html',
  styleUrl: './options-card.component.scss'
})
export class OptionsCardComponent {
  items = input.required<CardOption[]>();
  title = input.required<string>();
}
