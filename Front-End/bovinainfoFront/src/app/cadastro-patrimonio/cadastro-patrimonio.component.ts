import { Component, OnInit } from '@angular/core';
import { PatrimonioService } from '../patrimonio.service';

@Component({
  selector: 'app-cadastro-patrimonio',
  templateUrl: './cadastro-patrimonio.component.html',
  styleUrls: ['./cadastro-patrimonio.component.css']
})
export class CadastroPatrimonioComponent implements OnInit {

  constructor(public patrimonioService: PatrimonioService) { }

  calendarioBr: any;
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
  }

  setPatrimonio() {
    this.patrimonioService.setPatrimonio(this.patrimonio).subscribe(resultado => { 
      this.patrimonio = {
        id: null, nome_fazenda: null, tamanho_alqueire: null, endereco: { id: null, cep: null, logradouro: "", complemento: "", numero: "" }, pessoa: null
      }
    });
  }

  apagarFormulario() {
    this.patrimonio = {
      id: null, nome_fazenda: null, tamanho_alqueire: null, endereco: { id: null, cep: null, logradouro: "", complemento: "", numero: "" }, pessoa: null
    }
  }
}
