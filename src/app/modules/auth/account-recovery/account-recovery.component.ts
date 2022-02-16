import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { FirebaseErrors } from 'src/app/shared/classes/FirebaseErrors';

@Component({
  templateUrl: './account-recovery.component.html',
  styleUrls: ['./account-recovery.component.scss']
})
export class AccountRecoveryComponent implements OnInit {
  public accountRecoveryForm: FormGroup;
  public errorMessage!: string;
  constructor(private authService: AuthService, private router: Router) {
    this.accountRecoveryForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email])
    })
  }

  ngOnInit(): void {
  }

  get email() {
    return this.accountRecoveryForm.controls['email'];
  }

  onSubmitRecovery() {
    this.authService.passwordRecovery(this.email.value).then(
      (response) => {
        console.log(response);
      }
    ).catch((error) => {
      this.errorMessage = FirebaseErrors.Parse(error.code);
    })
  }

}
