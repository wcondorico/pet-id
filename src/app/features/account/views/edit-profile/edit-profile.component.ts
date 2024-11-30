import { Component } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { TitleComponent } from '@components/title/title.component';

@Component({
  selector: 'app-edit-profile',
  imports: [ ButtonComponent, TitleComponent ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss'
})
export class EditProfileComponent {

}
