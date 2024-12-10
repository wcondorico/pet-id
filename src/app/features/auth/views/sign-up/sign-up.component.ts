import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  inject,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { InputComponent } from '@components/input/input.component';
import { PComponent } from '@components/p/p.component';
import { TitleComponent } from '@components/title/title.component';
import { AuthFacade } from '@features/auth/aplication/facade/auth.facade';
import { TokensService } from '@features/auth/core/stores/tokens.service';

@Component({
  selector: 'app-sign-up',
  imports: [
    InputComponent,
    TitleComponent,
    ButtonComponent,
    ReactiveFormsModule,
    CommonModule,
    PComponent,
    RouterLink
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly renderer: Renderer2 = inject(Renderer2);
  private readonly authService: AuthFacade = inject(AuthFacade);
  private readonly tokensService: TokensService = inject(TokensService);

  @ViewChild('form1') form1!: ElementRef;
  @ViewChild('form2') form2!: ElementRef;
  @ViewChild('form3') form3!: ElementRef;
  @ViewChild('progress') progress!: ElementRef;

  formFirst = this.fb.group({
    email: ['aasa@gmail.com', Validators.required],
    password: ['prueba', Validators.required],
    confirmPass: ['prueba', Validators.required],
  });

  formSecond = this.fb.group({
    name: ['John', Validators.required],
    lastName: ['Wick', Validators.required],
  });

  formThird = this.fb.group({
    address: ['su casa', Validators.required],
    phone: ['555555555', Validators.required],
  });

  onSubmit() {
    console.log(1);
    this.authService.signUp({
      name: this.formSecond.value.name ?? '',
      lastName: this.formSecond.value.name ?? '',
      address: this.formThird.value.address ?? '',
      phone: this.formThird.value.phone ?? '',
      email: this.formFirst.value.email ?? '',
      password: this.formFirst.value.password ?? '',
    }).subscribe({
      next: tokens => console.log(tokens),
      error: err => console.log('el error es: ',err)
      });
  }

  nextOne() {
    this.renderer.setStyle(this.form1.nativeElement, 'left', '-550px');
    this.renderer.setStyle(this.form2.nativeElement, 'left', '110px');
    this.renderer.setStyle(this.progress.nativeElement, 'width', '380px');
  }

  nextTwo() {
    this.renderer.setStyle(this.form2.nativeElement, 'left', '-550px');
    this.renderer.setStyle(this.form3.nativeElement, 'left', '110px');
    this.renderer.setStyle(this.progress.nativeElement, 'width', '600px');
  }

  backOne() {
    this.renderer.setStyle(this.form1.nativeElement, 'left', '110px');
    this.renderer.setStyle(this.form2.nativeElement, 'left', '750px');
    this.renderer.setStyle(this.progress.nativeElement, 'width', '190px');
  }

  backTwo() {
    this.renderer.setStyle(this.form2.nativeElement, 'left', '110px');
    this.renderer.setStyle(this.form3.nativeElement, 'left', '750px');
    this.renderer.setStyle(this.progress.nativeElement, 'width', '380px');
  }
}
