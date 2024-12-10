import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { TitleComponent } from '@components/title/title.component';
import { AuthFacade } from '@features/auth/aplication/facade/auth.facade';
import { Tokens } from '@features/auth/core/interfaces/auth.interface';
import { TokensService } from '@features/auth/core/stores/tokens.service';
import { tap } from 'rxjs';
import { InputComponent } from "../../../../components/input/input.component";

@Component({
  selector: 'app-sign-in',
  imports: [InputComponent, TitleComponent, ButtonComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly authService: AuthFacade = inject(AuthFacade);
  private readonly tokensService: TokensService = inject(TokensService);
  private readonly router: Router = inject(Router);

  loginForm = this.fb.group({
    email: ['carlos.mendoza@example.com', Validators.required],
    password: ['prueba', Validators.required]
  })

  onSubmit() {
    this.authService.signIn({
      email: this.loginForm.value.email!,
      password: this.loginForm.value.password!
    }).pipe(
      tap((tokens: Tokens) => {
        this.tokensService.accessToken = tokens.access;
        this.tokensService.refreshToken = tokens.refresh;
        console.log('access:',this.tokensService.accessToken, 'refresh:',this.tokensService.refreshToken);
      })).subscribe({
        next: () => {
        this.router.navigate(['account/profile']);
      },
      error: (err) => {
        console.log('error',err);
      }
    })

  }

}
