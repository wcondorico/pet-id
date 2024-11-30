import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconButtonComponent } from '@components/icon-button/icon-button.component';
import { TitleComponent } from '@components/title/title.component';

@Component({
  selector: 'app-edit-profile',
  imports: [IconButtonComponent, TitleComponent],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProfileComponent {

}
