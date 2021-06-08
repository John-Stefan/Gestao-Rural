/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NavController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { Pessoa } from '../../models/pessoa.model';
import { PessoasService } from '../../services/pessoas.service';

@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.page.html',
  styleUrls: ['./pessoas-list.page.scss'],
})
export class PessoasListPage {

  pessoas$: Observable<Pessoa[]>;

  constructor(private navCtrl: NavController, private overlayService: OverlayService, private pessoasService: PessoasService) { }

  ionViewDidEnter(): void {
    this.pessoas$ = this.pessoasService.getAll();
  }

  onUpdate(pessoa: Pessoa): void {
    this.navCtrl.navigateForward(['pessoas', 'edit', pessoa.id]);
  }

  async onDelete(pessoa: Pessoa): Promise<void> {
    await this.overlayService.alert({
      message: `Você tem certeza que deseja apagar a pessoa "${pessoa.nome}"`,
      buttons: [
        {
          text: 'Sim',
          handler: async () => {
            await this.pessoasService.delete(pessoa);
            await this.overlayService.toast({
              message: `A pessoa "${pessoa.nome}" foi apagada!`,
              color: 'success'
            });
          }
        },
        'Não'
      ]
    });
  }
}
