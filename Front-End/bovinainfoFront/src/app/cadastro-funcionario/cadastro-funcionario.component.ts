import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  constructor(public funcionarioService : FuncionarioService) { }

  calendarioBr: any;
  funcionario: { nome, cpf, data_nascimento, telefone, email, endereco } =
  { nome: null, cpf: null, data_nascimento: "", telefone: "", email: "", endereco: { cep: null, logradouro: "", complemento: "", numero: "" }};

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
  }

  setFuncionario(){
    this.funcionarioService.setFuncionario(this.funcionario).subscribe(resultado => 
      {this.funcionario = { nome: null, cpf: null, data_nascimento: "", telefone: "", email: "", endereco: { cep: null, logradouro: "", complemento: "", numero: "" }}});
  }

  apagarFormulario(){
    this.funcionario = { nome: null, cpf: null, data_nascimento: "", telefone: "", email: "", endereco: { cep: null, logradouro: "", complemento: "", numero: "" }};
  }
}
