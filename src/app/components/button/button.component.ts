import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  icon = input<string | undefined>();
  contrastColor = input<boolean | undefined>();
  padding = input<string | undefined>();
  width = input<string | undefined>();
}
