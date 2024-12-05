import { Component, signal } from '@angular/core';
import { TitleComponent } from '@components/title/title.component';
import { Announcement } from './interfaces/announcement.interface';
import { AnnouncementCardComponent } from '@components/card/announcement-card/announcement-card.component';

@Component({
  selector: 'app-announcement',
  imports: [TitleComponent, AnnouncementCardComponent],
  templateUrl: './announcement.view.html',
  styleUrl: './announcement.view.scss'
})
export class AnnouncementView {
  announcements = signal<Announcement[]>([
    {
      perfil: "images/avatar.jpg",
      title: "Anuncio 1",
      text: "textaaazo del anuncio 1textaaazo del anuncio 1textaaazo del anuncio 1textaaazo del anuncio 1"
    },
    {
      perfil: "images/avatar.jpg",
      title: "Anuncio 2",
      text: "textaaazo del anuncio 2textaaazo del anuncio 2textaaazo del anuncio 2"
    }
    ,
    {
      perfil: "images/avatar.jpg",
      title: "Anuncio 3",
      text: "textaaazo del anuncio 3textaaazo del anuncio 3textaaazo del anuncio 3 textaaazo del anuncio 3 textaaazo del anuncio 3"
    }
  ])

}
