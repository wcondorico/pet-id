import { Component, input } from '@angular/core';
import { SubtitleComponent } from '@components/subtitle/subtitle.component';
import { OptionCard } from '@components/card/options-card/interfaces/option-card.interface';

@Component({
  selector: 'app-options-card',
  imports: [ SubtitleComponent ],
  templateUrl: './options-card.component.html',
  styleUrl: './options-card.component.scss'
})
export class OptionsCardComponent {
  items = input.required<OptionCard[]>();
  title = input.required<string>();
}
