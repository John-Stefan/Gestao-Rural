import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Patrimonio } from '../patrimonio';
import { PatrimonioService } from '../patrimonio.service';

@Component({
  selector: 'app-emissao-patrimonio',
  templateUrl: './emissao-patrimonio.component.html',
  styleUrls: ['./emissao-patrimonio.component.css'],
  providers: [MessageService, ConfirmationService]
})

export class EmissaoPatrimonioComponent implements OnInit {
  patrimonioDialogEndereco: boolean;
  patrimonioDialogEditar: boolean;
  patrimonio: Patrimonio;
  patrimonios;
  selectedPatrimonio;
  calendarioBr: any;

  constructor(private patrimonioService: PatrimonioService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
   
    this.getPatrimonio();
  }

  public selectPatrimonios(patrimonios) {
    this.selectedPatrimonio = patrimonios;
  }

  public infoPatrimonio(patrimonio: Patrimonio) {
    this.patrimonio = { ...patrimonio };
    this.patrimonioDialogEndereco = true;
  }

  public editarPatrimonioDialog(patrimonio: Patrimonio) {
    this.patrimonio = { ...patrimonio };
    this.patrimonioDialogEditar = true;
  }

  public editarPatrimonio() {
    this.patrimonioService.setPatrimonio(this.patrimonio).subscribe(resultado => {
      {
        this.patrimonio = {
          id: null, nome_fazenda: null, tamanho_alqueire: null, endereco: { id: null, cep: null, logradouro: "", complemento: "", numero: "" }, pessoa: null
        }
      }
      this.getPatrimonio();
    });
    this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Patrimonio alterado com sucesso!', life: 3000 });
    this.patrimonios = [...this.patrimonios];
    this.patrimonioDialogEditar = false;
  }

  public fecharPatrimonioDialog() {
    this.patrimonioDialogEditar = false;
  }

  public apagarPatrimonio(patrimonio: Patrimonio) {
    this.confirmationService.confirm({
      message: 'Tem certeza de que deseja excluir ' + patrimonio.nome_fazenda + '?',
      header: 'Confirme',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.patrimonioService.delete(patrimonio.id).subscribe(resultado => {
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Patrimonio excluido com sucesso!', life: 3000 });
          this.getPatrimonio();
        });
      }
    });
  }

  public getPatrimonio() {
    this.patrimonioService.getPatrimonio().subscribe(resultado => (this.patrimonios = resultado));
  }
}
