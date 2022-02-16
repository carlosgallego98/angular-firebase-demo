import { Injectable } from '@angular/core';
import { User, Auth, authState, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile,GoogleAuthProvider, signInWithPopup, signOut, sendPasswordResetEmail, confirmPasswordReset } from '@angular/fire/auth';
import { EMPTY, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<User | null> = EMPTY;
  constructor(private auth: Auth) {
    this.user$ = authState(this.auth);
  }

  async loginWithEmailAndPassword(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async registerWithEmailAndPassword(name: string, email: string, password: string) {
    return await createUserWithEmailAndPassword(this.auth, email, password).then(
      result => {
        updateProfile(result.user, {
          displayName: name
        });
        return result;
      }
    )
  }

  async passwordRecovery(email: string) {
    return await sendPasswordResetEmail(this.auth, email);
  }

  async confirmPasswordReset(obbCode: string, newPassword: string) {
    return await confirmPasswordReset(this.auth,obbCode, newPassword);
  }

  async logOut() {
    return await signOut(this.auth);
  }

}
