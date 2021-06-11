import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { Registro } from '../../models/registro.model';
import { RegistrosService } from '../../services/registros.service';

@Component({
  selector: 'app-registros-list',
  templateUrl: './registros-list.page.html',
  styleUrls: ['./registros-list.page.scss'],
})
export class RegistrosListPage {

  registros$: Observable<Registro[]>;

  constructor(private navCtrl: NavController, private overlayService: OverlayService, private registrosService: RegistrosService) { }

  async ionViewDidEnter(): Promise<void> {
    const loading = await this.overlayService.loading();
    this.registros$ = this.registrosService.getAll();
    this.registros$.pipe(take(1)).subscribe(registros => loading.dismiss());
  }

  onUpdate(registro: Registro): void {
    this.navCtrl.navigateForward(['registros', 'edit', registro.id]);
  }

  async onDelete(registro: Registro): Promise<void> {
    await this.overlayService.alert({
      message: `Você tem certeza que deseja apagar o registro "${registro.dataProducao}"`,
      buttons: [
        {
          text: 'Sim',
          handler: async () => {
            await this.registrosService.delete(registro);
            await this.overlayService.toast({
              message: `O registro "${registro.dataProducao}" foi apagado!`,
              color: 'success'
            });
          }
        },
        'Não'
      ]
    });
  }
}
