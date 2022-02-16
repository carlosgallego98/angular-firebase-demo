import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomValidators } from '@narik/custom-validators';
import { AuthService } from 'src/app/core/services/auth.service';
import { FirebaseErrors } from 'src/app/shared/classes/FirebaseErrors';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  public resetPasswordForm: FormGroup;
  public loading!: boolean;
  public errorMessage!: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService) {
    const passwordControl = new FormControl('', [Validators.required]);
    this.resetPasswordForm = new FormGroup({
      'password': passwordControl,
      'password_comfirmation': new FormControl('', [Validators.required, CustomValidators.equalTo(passwordControl)]),
    })
  }

  ngOnInit(): void {
  }

  get password() {
    return this.resetPasswordForm.controls['password'];
  }

  onSubmitReset(): void {
    const oobCode = this.activatedRoute.snapshot.queryParams['oobCode'];

    this.authService.confirmPasswordReset(oobCode, this.password.value)
      .then(() => this.router.navigate(['./auth/login']))
      .catch((error) => {
        this.errorMessage = FirebaseErrors.Parse(error.code);
      })
  }

}
