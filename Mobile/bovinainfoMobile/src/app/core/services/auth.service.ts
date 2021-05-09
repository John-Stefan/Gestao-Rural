/* eslint-disable no-var */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable @typescript-eslint/semi */
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthOptions, AuthProvider, User } from './auth.types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.authState$ = this.afAuth.authState;
  }

  get isAuthenticated(): Observable<boolean> {
    return this.authState$.pipe(map(user => user !== null))
  }

  public authenticate({ isSignIn, provider, user }: AuthOptions): Promise<firebase.auth.UserCredential> {
    let operation: Promise<firebase.auth.UserCredential>;

    if (provider !== AuthProvider.Email) {
      operation = this.signInWithPopup(provider);
    } else {
      operation = isSignIn ? this.signInWithEmail(user) : this.signUpWithEmail(user);
    }

    return operation;
  }

  public logout(): Promise<void> {
    return this.afAuth.signOut();
  }

  private signInWithEmail({ email, password }: User): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  private signUpWithEmail({ email, password, name }: User): Promise<firebase.auth.UserCredential> {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(credentials =>
        credentials.user
          .updateProfile({ displayName: name, photoURL: null })
          .then(() => credentials)
      );
  }

  private signInWithPopup(provider: AuthProvider): Promise<firebase.auth.UserCredential> {
    let signInProvider = null;

    switch (provider) {
      case AuthProvider.Facebook:
        signInProvider = new firebase.auth.FacebookAuthProvider();
        break;
    }

    return this.afAuth.signInWithPopup(signInProvider);
  }
}
