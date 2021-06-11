import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { Registro } from '../../models/registro.model';

@Component({
  selector: 'app-registros-list',
  templateUrl: './registros-list.page.html',
  styleUrls: ['./registros-list.page.scss'],
})
export class RegistrosListPage {

  registros$: Observable<Registro[]>;

  constructor(private navCtrl: NavController, private overlayService: OverlayService) { }

}
