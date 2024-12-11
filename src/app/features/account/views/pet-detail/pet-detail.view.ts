import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { TitleComponent } from '@components/title/title.component';

@Component({
  selector: 'app-pet-detail',
  imports: [TitleComponent, ButtonComponent, RouterLink],
  templateUrl: './pet-detail.view.html',
  styleUrl: './pet-detail.view.scss'
})
export class PetDetailView {

}
