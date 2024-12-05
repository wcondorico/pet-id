import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { SubtitleComponent } from "../../subtitle/subtitle.component";

@Component({
  selector: 'app-pet-card',
  imports: [NgOptimizedImage, SubtitleComponent],
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.scss'
})
export class PetCardComponent {
  img = input.required<string>();
  name = input.required<string>();
  anchor = input<string | undefined>();
}
