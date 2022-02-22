import { Component, OnInit } from '@angular/core';
import { User, updateProfile, reauthenticateWithCredential } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createAvatar } from '@dicebear/avatars';
import { updateEmail } from 'firebase/auth';
import { AuthService } from 'src/app/core/services/auth.service';
import * as style from '@dicebear/avatars-initials-sprites';
import { CustomValidators } from '@narik/custom-validators';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user!: User;
  public updateProfileForm!: FormGroup;
  public loading: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.user ? this.user = this.authService.user : null;

    this.updateProfileForm = new FormGroup({
      name: new FormControl(this.user.displayName),
      email: new FormControl({
        value: this.user.email,
        disabled: true
      }, [Validators.required, CustomValidators.email]),
    });
  }

  ngOnInit(): void {

  }

  onUpdateProfile() {
    this.loading = true;
    const { name, email } = this.updateProfileForm.value;

    updateProfile(this.user, {
      displayName: name,
    }).then(() => {
      if (this.user.email !== email) {

        // Si cambia el correo tiene que reautenticarse
        // reauthenticateWithCredential(this.user, this.user.email).then(() => {

        // }
      }
      return updateEmail(this.user, email)
    }).then(() => {
      return this.authService.setUserData(this.user)
    }).catch(err => { })
      .finally(() => this.loading = false);
  }

}
