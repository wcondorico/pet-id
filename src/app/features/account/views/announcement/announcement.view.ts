import { Component } from '@angular/core';
import { TitleComponent } from '@components/title/title.component';

@Component({
  selector: 'app-announcement',
  imports: [TitleComponent],
  templateUrl: './announcement.view.html',
  styleUrl: './announcement.view.scss'
})
export class AnnouncementView {

}
