import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../funcionario';
import { FuncionarioService } from '../funcionario.service';
import { PatrimonioService } from '../patrimonio.service';

@Component({
  selector: 'app-cadastro-patrimonio',
  templateUrl: './cadastro-patrimonio.component.html',
  styleUrls: ['./cadastro-patrimonio.component.css']
})

export class CadastroPatrimonioComponent implements OnInit {

  constructor(public patrimonioService: PatrimonioService, private funcionarioService: FuncionarioService) { }

  calendarioBr: any;
  pessoa: Funcionario;
  funcionarios;
  patrimonio: { id, nome_fazenda, tamanho_alqueire, endereco, pessoa } = {
    id: null, nome_fazenda: null, tamanho_alqueire: null, endereco: { id: null, cep: null, logradouro: "", complemento: "", numero: "" }, pessoa: null
  };

  ngOnInit(): void {
    this.calendarioBr = {
      firstDayOfWeek: 0,
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


  setPatrimonio() {
    this.patrimonioService.setPatrimonio(this.patrimonio).subscribe(resultado => { 
      this.patrimonio = {
        id: null, nome_fazenda: null, tamanho_alqueire: null, endereco: { id: null, cep: null, logradouro: "", complemento: "", numero: "" }, pessoa: null
      }
    });
  }

  getFuncionario() {
    this.funcionarioService.getFuncionario().subscribe(resultado => (this.funcionarios = resultado))
  }

  apagarFormulario() {
    this.patrimonio = {
      id: null, nome_fazenda: null, tamanho_alqueire: null, endereco: { id: null, cep: null, logradouro: "", complemento: "", numero: "" }, pessoa: null
    }
  }
}
