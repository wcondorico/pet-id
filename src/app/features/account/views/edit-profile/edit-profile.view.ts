import { Component } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { TitleComponent } from '@components/title/title.component';
import { InputComponent } from '@components/input/input.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  imports: [ ButtonComponent, TitleComponent, InputComponent, RouterLink ],
  templateUrl: './edit-profile.view.html',
  styleUrl: './edit-profile.view.scss'
})
export class EditProfileView {

}
