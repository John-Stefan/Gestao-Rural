import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { Animal } from 'src/app/animais/models/animal.model';
import { AnimaisService } from 'src/app/animais/services/animais.service';
import { Producao } from '../../models/producao.model';
import { ProducoesService } from '../../services/producoes.service';

@Component({
  selector: 'app-producoes-list',
  templateUrl: './producoes-list.page.html',
  styleUrls: ['./producoes-list.page.scss'],
})
export class ProducoesListPage {
  animais$: Observable<Animal[]>;
  producoes$: Observable<Producao[]>;

  constructor(private navCtrl: NavController, private overlayService: OverlayService, private animaisService: AnimaisService, private producoesService: ProducoesService) { }

  async ionViewDidEnter(): Promise<void> {
    const loading = await this.overlayService.loading();
    this.producoes$ = this.producoesService.getAll();
    this.producoes$.pipe(take(1)).subscribe(producoes => loading.dismiss());
  }

  onUpdate(producao: Producao): void {
    this.navCtrl.navigateForward(['producoes', 'edit', producao.id]);
  }

  async onDelete(producao: Producao): Promise<void> {
    await this.overlayService.alert({
      message: `Você tem certeza que deseja apagar a produção do animal "${producao.animalReg}" da data "${producao.registro}"`,
      buttons: [
        {
          text: 'Sim',
          handler: async () => {
            await this.producoesService.delete(producao);
            await this.overlayService.toast({
              message: `A produção do animal "${producao.animalReg}" da data "${producao.registro}" foi apagada`,
              color: 'success'
            });
          }
        },
        'Não'
      ]
    });
  }
}
