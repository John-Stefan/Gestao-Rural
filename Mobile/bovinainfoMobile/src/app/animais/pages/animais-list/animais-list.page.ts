import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { Animal } from '../../models/animal.model';
import { AnimaisService } from '../../services/animais.service';

@Component({
  selector: 'app-animais-list',
  templateUrl: './animais-list.page.html',
  styleUrls: ['./animais-list.page.scss'],
})
export class AnimaisListPage {

  animais$: Observable<Animal[]>;

  constructor(private navCtrl: NavController, private overlayService: OverlayService, private animaisService: AnimaisService) { }

  async ionViewDidEnter(): Promise<void> {
    const loading = await this.overlayService.loading();
    this.animais$ = this.animaisService.getAll();
    this.animais$.pipe(take(1)).subscribe(animais => loading.dismiss());
  }

  onUpdate(animal: Animal): void {
    this.navCtrl.navigateForward(['animais', 'edit', animal.id]);
  }

  async onDelete(animal: Animal): Promise<void> {
    await this.overlayService.alert({
      message: `Você tem certeza que deseja apagar o animal "${animal.matricula}"`,
      buttons: [
        {
          text: 'Sim',
          handler: async () => {
            await this.animaisService.delete(animal);
            await this.overlayService.toast({
              message: `O animal "${animal.matricula}" foi apagada!`,
              color: 'success'
            });
          }
        },
        'Não'
      ]
    });
  }

}
