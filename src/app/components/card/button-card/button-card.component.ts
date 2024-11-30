import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button-card',
  templateUrl: './button-card.component.html',
  styleUrl: './button-card.component.scss'
})
export class ButtonCardComponent {
  icon = input.required<string>();
  title = input.required<string>();
}
