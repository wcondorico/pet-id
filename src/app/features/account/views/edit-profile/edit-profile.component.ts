import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconButtonComponent } from 'app/components/button/icon-button/icon-button.component';
import { TitleComponent } from 'app/components/title/title.component';

@Component({
  selector: 'app-edit-profile',
  imports: [IconButtonComponent, TitleComponent],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProfileComponent {

}
