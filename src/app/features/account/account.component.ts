import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  profileIsActived = signal(false);
  pruebita = true;
  profileActived(): void {
    this.profileIsActived.set(!this.profileIsActived())
  }
}
