import { NgOptimizedImage } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { SubtitleComponent } from "../../subtitle/subtitle.component";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pet-card',
  imports: [NgOptimizedImage, SubtitleComponent, RouterLink],
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.scss'
})
export class PetCardComponent {
  private readonly router: Router = inject(Router);
  img = input.required<string>();
  name = input.required<string>();
  anchor = input<string | undefined>();
  id = input.required<string>();


}
