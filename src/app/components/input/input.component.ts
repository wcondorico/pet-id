import { Component, input } from '@angular/core';
import { Input } from '@components/input/types/input.type';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  icon = input<string | undefined>();
  type = input<Input>('text');
  placeholder = input<string>('');
}
