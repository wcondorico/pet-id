import { Component, input } from '@angular/core';
import { SubtitleComponent } from '@components/subtitle/subtitle.component';
import { PComponent } from "../../p/p.component";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-announcement-card',
  imports: [SubtitleComponent, PComponent, NgOptimizedImage],
  templateUrl: './announcement-card.component.html',
  styleUrl: './announcement-card.component.scss'
})
export class AnnouncementCardComponent {
  tittle = input.required<string>();
  perfil = input<string>();
}
