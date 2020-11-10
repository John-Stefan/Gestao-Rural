import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  funcionario: { id, nome, cpf, data_nascimento, telefone, cep, rua, complemento, logradouro } = 
  { id: null, nome: null, cpf: null, data_nascimento: "", telefone: "", cep: "", rua: "", complemento: "", logradouro: "" };

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  createFuncionario(){
    console.log(this.funcionario);
    this.dataService.createFuncionario(this.funcionario);
    this.funcionario = { id: null, nome: null, cpf: null, data_nascimento: "", telefone: "", cep: "", rua: "", complemento: "", logradouro: "" };
  }

}
