import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cancel-button',
  imports: [],
  templateUrl: './cancel-button.component.html',
  styleUrl: './cancel-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CancelButtonComponent { }
