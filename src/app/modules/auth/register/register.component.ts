import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '@narik/custom-validators';
import { AuthError, UserCredential } from 'firebase/auth';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup
  public loading!: boolean;
  public errorMessage!: string;
  constructor(private authService: AuthService, private router: Router) {
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
    this.loading = true;
    const { name, email, password } = this.registerForm.value;
    this.authService.registerWithEmailAndPassword(name, email, password)
      .then((result) => this.router.navigate(['./dashboard'])
      )
      .catch((error: AuthError) => {
        switch (error.code) {
          case "auth/email-already-in-use":
            {
              this.registerForm.controls['email'].setErrors({
                'email-taken': true
              })
              break;
            }
          default:
            {
              this.errorMessage = "Error desconocido.";
              break;
            }
        }
      })
      .finally(() => this.loading = false)
  }
}
