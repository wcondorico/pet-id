import { Component, input } from '@angular/core';
import { SubtitleComponent } from '@components/subtitle/subtitle.component';
import { OptionCard } from '@components/card/options-card/interfaces/option-card.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-options-card',
  imports: [ SubtitleComponent, RouterLink ],
  templateUrl: './options-card.component.html',
  styleUrl: './options-card.component.scss'
})
export class OptionsCardComponent {
  items = input.required<OptionCard[]>();
  title = input.required<string>();
}
