/* eslint-disable @typescript-eslint/member-delimiter-style */
import { Component } from '@angular/core';
import firebase from 'firebase';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  user: firebase.User;

  constructor(
    private authService: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.authService.authState$.subscribe(user => (this.user = user));
  }
}
