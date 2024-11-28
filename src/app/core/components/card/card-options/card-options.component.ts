import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-options',
  imports: [],
  templateUrl: './card-options.component.html',
  styleUrl: './card-options.component.scss'
})
export class CardOptionsComponent {
  @Input() items!: {icon:string; text:string}[];
}
