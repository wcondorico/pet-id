import { NgOptimizedImage } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TokensService } from '@features/auth/core/stores/tokens.service';

@Component({
  selector: 'app-account',
  imports: [ RouterOutlet, NgOptimizedImage ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  private readonly toneksService: TokensService = inject(TokensService);
  private readonly router: Router = inject(Router);
  profileIsActivated = signal(false);

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const clickedInside = event.target instanceof HTMLElement && event.target.closest('.account__header--profile');
    if (!clickedInside) {
      this.profileIsActivated.set(false);
    }
  }

  toggleMenu(): void {
    this.profileIsActivated.set(!this.profileIsActivated())
  }

  logOut() {
    this.toneksService.accessToken = '';
    this.toneksService.refreshToken = '';
    this.router.navigate(['/auth/sign-in']);
  }
}
