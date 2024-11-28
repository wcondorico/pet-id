import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-account',
  imports: [ RouterOutlet, CommonModule, NgOptimizedImage ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  profileIsActivated = signal(false);

  profileActivated(): void {
    this.profileIsActivated.set(!this.profileIsActivated())
  }
}
