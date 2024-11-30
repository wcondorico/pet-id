import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-email-input',
  imports: [],
  templateUrl: './email-input.component.html',
  styleUrl: './email-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailInputComponent { }
