/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Component, forwardRef, input, signal } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { Input } from './types/input.type';

@Component({
  selector: 'app-input',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
})
export class InputComponent implements ControlValueAccessor {
  icon = input<string | undefined>();
  type = input<Input>('text');
  placeholder = input<string>('');
  value = signal<string | null>(null);
  disabled = signal<boolean>(false);

  private onTouched = () => {};
  private onChange: (value: string) => void = () => {};

  writeValue(value: any): void {
    this.value.set(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value.set(input.value);
    this.onChange(this.value()!);
    this.onTouched();
  }
}
