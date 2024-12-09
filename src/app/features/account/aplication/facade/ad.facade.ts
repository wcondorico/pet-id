import { inject, Injectable } from '@angular/core';
import { Ad } from '@features/account/core/interface/ad.interface';
import { AdRepository } from '@features/account/domain/repository/ad.repository';

@Injectable()
export class AdFacade {
  ad = inject(AdRepository);

  getAllAds() {
    return this.ad.getAllAds();
  }

  getAd(id: number) {
    return this.ad.getAd(id);
  }

  createAd(ad: Ad) {
    return this.ad.createAd(ad);
  }

  updateAd(id: number, ad: Ad) {
    return this.ad.updateAd(id, ad);
  }

  deleteAd(id: number) {
    return this.ad.deleteAd(id);
  }
}
