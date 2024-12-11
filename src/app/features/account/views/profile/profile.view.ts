import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonCardComponent } from '@components/card/button-card/button-card.component';
import { OptionCard } from '@components/card/options-card/interfaces/option-card.interface';
import { OptionsCardComponent } from '@components/card/options-card/options-card.component';
import { InputComponent } from '@components/input/input.component';
import { TitleComponent } from '@components/title/title.component';
import { UserFacade } from '@features/account/aplication/facade/user.facade';
import { User } from '@features/account/core/interface/user.interface';
import { TokensService } from '@features/auth/core/stores/tokens.service';

@Component({
  selector: 'app-profile',
  imports: [ TitleComponent, ButtonCardComponent, OptionsCardComponent, RouterModule, InputComponent ],
  templateUrl: './profile.view.html',
  styleUrl: './profile.view.scss',
})
export class ProfileView implements OnInit{
  private readonly userService: UserFacade = inject(UserFacade);
  private readonly tokensService: TokensService = inject(TokensService);
  private readonly router: Router = inject(Router);

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (users: User[]) => {
        console.log(users);
      },
      error: (err) => {
        console.log('token de acceso',this.tokensService.accessToken);
        console.log('el error es: ',err);
      }
    })
  }

  options = signal<OptionCard[]>(
    [
      { icon: 'pets', text: 'Mis mascotas', route: '/account/my-pets' },
      { icon: 'event', text: 'Mis anuncios', route: '/account/ad' },
      { icon: 'volunteer_activism', text: 'Adopción', route: '/account/adoptions'},
      { icon: 'close', text: 'Cerrar sesión', route: '/auth/sign-in'},
      { icon: 'close', text: 'Eliminar cuenta', route: ''}
    ]
  );

  searchPets() {
    this.router.navigate(['account/my-pets'])
  }
}
