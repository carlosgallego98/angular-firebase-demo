import { Injectable } from '@angular/core';
import { Auth, authState, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, signOut, sendPasswordResetEmail, confirmPasswordReset, user } from '@angular/fire/auth';
import { doc, setDoc, Firestore } from '@angular/fire/firestore';
import { User } from '../interfaces/user'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth, private fs: Firestore) {
    authState(this.auth);
  }

  get user() {
    return this.auth.currentUser;
  }

  async loginWithEmailAndPassword(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
      // .then((result) => {
      //   this.setUserData(result.user);
      // });
  }

  async registerWithEmailAndPassword(name: string, email: string, password: string) {
    return await createUserWithEmailAndPassword(this.auth, email, password).then(
      result => {
        updateProfile(result.user, {
          displayName: name
        });
        this.setUserData(result.user);
        return result;
      }
    )
  }

  async passwordRecovery(email: string) {
    return await sendPasswordResetEmail(this.auth, email);
  }

  async confirmPasswordReset(obbCode: string, newPassword: string) {
    return await confirmPasswordReset(this.auth, obbCode, newPassword);
  }

  async logOut() {
    return await signOut(this.auth);
  }

  setUserData(user: any) {
    const userRef = doc(this.fs, `users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }

    setDoc(userRef, userData, {
      merge: true
    })
  }
}
