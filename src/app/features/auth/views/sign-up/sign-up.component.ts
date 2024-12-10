import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ButtonComponent } from '@components/button/button.component';
import { InputComponent } from '@components/input/input.component';
import { TitleComponent } from '@components/title/title.component';

@Component({
  selector: 'app-sign-up',
  imports: [InputComponent, TitleComponent, ButtonComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  private readonly fb: FormBuilder = inject(FormBuilder);

  formUser = this.fb.group({
    'name': ['', Validators.required],
    'lastName': ['', Validators.required],
    'address': ['', Validators.required],
    'email': ['', Validators.required, Validators.email],
    'password': ['', Validators.required],
    'phone': ['', Validators.required]
  })
}
