/* eslint-disable max-len */
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { Pessoa } from 'src/app/pessoas/models/pessoa.model';
import { PessoasService } from 'src/app/pessoas/services/pessoas.service';
import { Patrimonio } from '../../models/patrimonio.model';
import { PatrimoniosService } from '../../services/patrimonios.service';

@Component({
  selector: 'app-patrimonios-list',
  templateUrl: './patrimonios-list.page.html',
  styleUrls: ['./patrimonios-list.page.scss'],
})
export class PatrimoniosListPage {
  pessoas$: Observable<Pessoa[]>;
  patrimonios$: Observable<Patrimonio[]>;

  constructor(private navCtrl: NavController, private overlayService: OverlayService, private pessoasService: PessoasService, private patrimoniosService: PatrimoniosService) { }

  async ionViewDidEnter(): Promise<void> {
    const loading = await this.overlayService.loading();
    this.patrimonios$ = this.patrimoniosService.getAll();
    this.patrimonios$.pipe(take(1)).subscribe(patrimonios => loading.dismiss());
  }

  onUpdate(patrimonio: Patrimonio): void {
    this.navCtrl.navigateForward(['patrimonios', 'edit', patrimonio.id]);
  }

  async onDelete(patrimonio: Patrimonio): Promise<void> {
    await this.overlayService.alert({
      message: `Você tem certeza que deseja apagar o patrimonio "${patrimonio.nomeFazenda}"`,
      buttons: [
        {
          text: 'Sim',
          handler: async () => {
            await this.patrimoniosService.delete(patrimonio);
            await this.overlayService.toast({
              message: `O patrimonio "${patrimonio.nomeFazenda}" foi apagada!`,
              color: 'success'
            });
          }
        },
        'Não'
      ]
    });
  }

}
