import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthError } from '@angular/fire/auth';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { FirebaseErrors } from 'src/app/shared/classes/FirebaseErrors';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public errorMessage!: string;
  public loading!: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  ngOnInit(): void {
  }

  login() {
    this.loading = true;
    const { email, password } = this.loginForm.value;
    this.authService.loginWithEmailAndPassword(email, password)
      .then(response => {
        this.router.navigate(['./dashboard'])
      })
      .catch((error: AuthError) => {
        this.errorMessage = FirebaseErrors.Parse(error.code);
      })
      .finally(() => this.loading = false)
  }
}
