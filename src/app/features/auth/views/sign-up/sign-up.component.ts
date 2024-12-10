import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '@components/button/button.component';
import { InputComponent } from '@components/input/input.component';
import { TitleComponent } from '@components/title/title.component';

@Component({
  selector: 'app-sign-up',
  imports: [InputComponent, TitleComponent, ButtonComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly renderer: Renderer2 = inject(Renderer2);

  @ViewChild('form1') form1!: ElementRef;
  @ViewChild('form2') form2!: ElementRef;
  @ViewChild('form3') form3!: ElementRef;
  @ViewChild('progress') progress!: ElementRef;

  formFirst = this.fb.group({
    'email': ['', Validators.required, Validators.email],
    'password': ['', Validators.required],
    'confirmPass': ['', Validators.required]
  })

  formSecond = this.fb.group({
    'name': ['', Validators.required],
    'lastName': ['', Validators.required],
  })

  formThird = this.fb.group({
    'address': ['', Validators.required],
    'phone': ['', Validators.required]
  })

  onSubmit() {
    console.log(1);
  }

  nextStep(){
    console.log(1);
  }
  nextOne() {
    this.renderer.setStyle(this.form1.nativeElement, 'left', '-550px')
    this.renderer.setStyle(this.form2.nativeElement, 'left', '110px')
    this.renderer.setStyle(this.progress.nativeElement, 'width', '380px')
  }

  nextTwo() {
    this.renderer.setStyle(this.form2.nativeElement, 'left', '-550px')
    this.renderer.setStyle(this.form3.nativeElement, 'left', '110px')
    this.renderer.setStyle(this.progress.nativeElement, 'width', '600px')
  }

  backOne() {
    this.renderer.setStyle(this.form1.nativeElement, 'left', '110px')
    this.renderer.setStyle(this.form2.nativeElement, 'left', '750px')
    this.renderer.setStyle(this.progress.nativeElement, 'width', '190px')
  }

  backTwo() {
    this.renderer.setStyle(this.form2.nativeElement, 'left', '110px')
    this.renderer.setStyle(this.form3.nativeElement, 'left', '750px')
    this.renderer.setStyle(this.progress.nativeElement, 'width', '380px')
  }
}
