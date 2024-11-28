import { Component, input, Input } from '@angular/core';
import { SubtitleComponent } from '../../subtitle/subtitle.component';

@Component({
  selector: 'app-card-options',
  imports: [SubtitleComponent],
  templateUrl: './card-options.component.html',
  styleUrl: './card-options.component.scss'
})
export class CardOptionsComponent {
  @Input() items!: {icon:string; text:string}[];
  title = input.required()
}
