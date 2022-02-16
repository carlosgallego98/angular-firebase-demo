import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '@narik/custom-validators';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup
  constructor() {
    let password = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.registerForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': password,
      'password_comfirmation': new FormControl('', [Validators.required, CustomValidators.equalTo(password)]),
    });
  }

  ngOnInit(): void {
  }

  public submitRegistration(): void {
    console.log(this.registerForm.value);
  }
}
