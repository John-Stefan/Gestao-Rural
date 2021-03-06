import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Firestore } from 'src/app/core/classes/firestore.class';
import { AuthService } from 'src/app/core/services/auth.service';
import { Patrimonio } from '../models/patrimonio.model';

@Injectable({
  providedIn: 'root'
})
export class PatrimoniosService extends Firestore<Patrimonio> {

  constructor(private authService: AuthService, db: AngularFirestore) {
    super(db);
    this.init();
  }

  private init(): void {
    this.authService.authState$.subscribe(user => {
      if (user) {
        this.setCollection(`/users/${user.uid}/patrimonios`, ref =>
          ref.orderBy('nomeFazenda', 'asc'));
        return;
      }
      this.setCollection(null);
    });
  }
}
