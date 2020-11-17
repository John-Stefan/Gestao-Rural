import { BoundElementPropertyAst } from '@angular/compiler';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { Funcionario } from '../funcionario';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-emissao-funcionario',
  templateUrl: './emissao-funcionario.component.html',
  styleUrls: ['./emissao-funcionario.component.css'],
  providers: [MessageService, ConfirmationService]
})

export class EmissaoFuncionarioComponent implements OnInit {
  @ViewChild(TableModule) dt: TableModule;

  funcionarioDialogEndereco: boolean;
  funcionario: Funcionario;
  funcionarios;
  selectedFuncionario;

  constructor(private funcionarioService: FuncionarioService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.funcionarioService.getFuncionario().subscribe(resultado => (this.funcionarios = resultado));
  }

  public selectFuncionarios(funcionarios) {
    this.selectedFuncionario = funcionarios;
  }

  public infoFuncionario(funcionario: Funcionario) {
    this.funcionario = { ...funcionario };
    this.funcionarioDialogEndereco = true;
  }

  public apagarFuncionario(funcionario: Funcionario) {
    this.confirmationService.confirm({
      message: 'Tem certeza de que deseja excluir ' + funcionario.nome + '?',
      header: 'Confirme',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.funcionarioService.delete(funcionario.id).subscribe(resultado => {
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Funcionario excluido com sucesso', life: 3000 });   
          this.funcionarioService.getFuncionario().subscribe(resultado => (this.funcionarios = resultado));     
        });        
      }
    });
  }
}
