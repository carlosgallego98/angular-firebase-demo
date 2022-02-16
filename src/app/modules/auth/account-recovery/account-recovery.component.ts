import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './account-recovery.component.html',
  styleUrls: ['./account-recovery.component.scss']
})
export class AccountRecoveryComponent implements OnInit {
  public accountRecoveryForm: FormGroup;
  constructor() {
    this.accountRecoveryForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email])
    })
  }

  ngOnInit(): void {
  }

  onSubmitRecovery() {
    console.log(this.accountRecoveryForm.value);
  }

}
