import { Component, inject, OnInit, signal } from '@angular/core';
import { AnnouncementCardComponent } from '@components/card/announcement-card/announcement-card.component';
import { TitleComponent } from '@components/title/title.component';
import { AdFacade } from '@features/account/aplication/facade/ad.facade';
import { Ad } from '@features/account/core/interface/ad.interface';

@Component({
  selector: 'app-announcement',
  imports: [TitleComponent, AnnouncementCardComponent],
  templateUrl: './announcement.view.html',
  styleUrl: './announcement.view.scss'
})
export class AnnouncementView implements OnInit{
  private readonly adService = inject(AdFacade);
  ads = signal<Ad[]>([]);

  ngOnInit() {
    this.getAllAds();
  }

  getAllAds() {
    this.adService.getAllAds().subscribe({
      next: (ads) => {
        this.ads.set(ads);
        console.log(1);
      },
      error: (err) => {
        console.log('el error es: ', err)
      }
    });
  }

}
