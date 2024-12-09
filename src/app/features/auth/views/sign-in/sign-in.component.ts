import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InputComponent } from "../../../../components/input/input.component";
import { TitleComponent } from '@components/title/title.component';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-sign-in',
  imports: [InputComponent, TitleComponent, ButtonComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
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
