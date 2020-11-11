import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  funcionario: { nome, cpf, data_nascimento, telefone, endereco } = 
  { nome: null, cpf: null, data_nascimento: "", telefone: "", endereco: {cep: "", rua: "", complemento: "", logradouro: ""}};

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  createFuncionario(){
    console.log(this.funcionario);
    this.dataService.createFuncionario(this.funcionario);
    //this.funcionario = { nome: null, cpf: null, data_nascimento: "", telefone: "", endereco: {cep: "", rua: "", complemento: "", logradouro: ""}};
  }

}
