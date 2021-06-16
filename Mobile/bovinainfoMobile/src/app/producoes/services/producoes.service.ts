import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Firestore } from 'src/app/core/classes/firestore.class';
import { AuthService } from 'src/app/core/services/auth.service';
import { Producao } from '../models/producao.model';

@Injectable({
  providedIn: 'root'
})
export class ProducoesService extends Firestore<Producao> {

  constructor(private authService: AuthService, db: AngularFirestore) {
    super(db);
    this.init();
  }

  private init(): void {
    this.authService.authState$.subscribe(user => {
      if (user) {
        this.setCollection(`/users/${user.uid}/producoes`);
        return;
      }
      this.setCollection(null);
    });
  }
}
