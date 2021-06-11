import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Firestore } from '../core/classes/firestore.class';
import { AuthService } from '../core/services/auth.service';
import { Registro } from '../registros/models/registro.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService extends Firestore<Registro> {

  constructor(private authService: AuthService, db: AngularFirestore) {
    super(db);
    this.init();
  }

  private init(): void {
    this.authService.authState$.subscribe(user => {
      if (user) {
        this.setCollection(`/users/${user.uid}/pessoas`);
      }
      return;
      this.setCollection(null);
    });
  }
}
