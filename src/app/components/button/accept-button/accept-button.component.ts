import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-accept-button',
  imports: [],
  templateUrl: './accept-button.component.html',
  styleUrl: './accept-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcceptButtonComponent { }
