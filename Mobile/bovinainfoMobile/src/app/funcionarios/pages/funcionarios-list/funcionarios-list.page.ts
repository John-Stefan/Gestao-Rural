/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { Funcionario } from '../../models/funcionario.model';
import { FuncionariosService } from '../../services/funcionarios.service';

@Component({
  selector: 'app-funcionarios-list',
  templateUrl: './funcionarios-list.page.html',
  styleUrls: ['./funcionarios-list.page.scss'],
})
export class FuncionariosListPage implements OnInit {

  funcionarios$: Observable<Funcionario[]>;
  constructor(private funcionariosService: FuncionariosService, private overlayService: OverlayService) { }

  ngOnInit() {
    this.funcionarios$ = this.funcionariosService.getPessoa();
  }

  async onDelete(funcionario: Funcionario): Promise<void> {
    await this.overlayService.alert({
      message: `Você tem certeza que deseja apagar a pessoa "${funcionario.nome}"`,
      buttons: [
        {
          text: 'Sim',
          handler: async () => {
            await this.funcionariosService.delete(funcionario.id);
            await this.overlayService.toast({
              message: `A pessoa "${funcionario.nome}" foi apagado!`,
              color: 'success'
            });
          }
        },
        'Não'
      ]
    });
  }

}
