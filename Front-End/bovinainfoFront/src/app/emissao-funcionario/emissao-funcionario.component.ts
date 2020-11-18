import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Funcionario } from '../funcionario';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-emissao-funcionario',
  templateUrl: './emissao-funcionario.component.html',
  styleUrls: ['./emissao-funcionario.component.css'],
  providers: [MessageService, ConfirmationService]
})

export class EmissaoFuncionarioComponent implements OnInit {
  funcionarioDialogEndereco: boolean;
  funcionarioDialogEditar: boolean;
  funcionario: Funcionario;
  funcionarios;
  selectedFuncionario;
  calendarioBr: any;

  constructor(private funcionarioService: FuncionarioService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.calendarioBr = {firstDayOfWeek: 0,
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      today: 'Hoje',
    };
    this.getFuncionario();
  }

  public selectFuncionarios(funcionarios) {
    this.selectedFuncionario = funcionarios;
  }

  public infoFuncionario(funcionario: Funcionario) {
    this.funcionario = { ...funcionario };
    this.funcionarioDialogEndereco = true;
  }

  public editarFuncionario(funcionario: Funcionario) {
    this.funcionario = {...funcionario};
    this.funcionarioDialogEditar = true;
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
          this.getFuncionario();    
        });        
      }
    });
  }

  public getFuncionario() {
    this.funcionarioService.getFuncionario().subscribe(resultado => (this.funcionarios = resultado)); 
  }
}
