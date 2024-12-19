
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { InputComponent } from '@components/form/input/input.component';
import { TitleComponent } from '@components/title/title.component';
import { AuthFacade } from '@features/auth/aplication/facade/auth.facade';
import { Tokens } from '@features/auth/core/interfaces/auth.interface';
import { TokensService } from '@features/auth/core/stores/tokens.service';

import { PComponent } from '@components/p/p.component';
import { tap } from 'rxjs';


@Component({
  selector: 'app-sign-in',
  imports: [InputComponent, TitleComponent, ButtonComponent, ReactiveFormsModule, CommonModule, PComponent, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly router: Router = inject(Router);
  private readonly authService: AuthFacade = inject(AuthFacade);
  private readonly tokensService: TokensService = inject(TokensService);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  onSubmit() {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.authService.signIn({
        email: this.loginForm.value.email!,
        password: this.loginForm.value.password!
      }).pipe(
        tap((tokens: Tokens) => {
          this.tokensService.accessToken = tokens.access;
          this.tokensService.refreshToken = tokens.refresh;
        })).subscribe({
          next: () => {
            this.router.navigate(['account/profile']);
          },
          error: (err) => {
            console.log('error', err);
          }
        })
    }
  }
}
