import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() type: 'text' | 'number' | 'password' | 'email' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'url' | 'search' | 'tel' | 'color' = 'text';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() name: string = 'input';
  @Input() parent!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  get isValid() {
    return this.parent.controls[this.name].valid;
  }

  get isTouched() {
    return this.parent.controls[this.name].touched;
  }

  errorMessage() {
    if (this.isTouched) {
      if (this.parent.controls[this.name].hasError('required')) {
        return 'Este campo es requerido';
      }
      if (this.parent.controls[this.name].hasError('email')) {
        return 'Este campo no es un email válido';
      }
      if (this.parent.controls[this.name].hasError('minlength')) {
        const minLength = this.parent.controls[this.name].errors?.['minlength'].requiredLength;
        return 'Este campo debe ser al menos de ' + minLength + ' caracteres';
      }
      if (this.parent.controls[this.name].hasError('maxlength')) {
        const minLength = this.parent.controls[this.name].errors?.['minLength'].requiredLength;
        return 'Este campo debe tener mínimo ' + minLength + ' caracteres';
      }
      if (this.parent.controls[this.name].hasError('pattern')) {
        return 'This field must be a valid url';
      }
      if (this.parent.controls[this.name].hasError('email-taken')) {
        return 'Este correo electrónico ya está ocupado';
      }
    }

    // Para la validación de la contraseña
    if (this.parent.controls[this.name].hasError('equalTo')) {
      return 'La confirmación debe ser igual a la contraseña';
    }
    return '';
  }
}
