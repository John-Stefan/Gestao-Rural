import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pessoa } from '../../models/pessoa.model';

@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.component.html',
  styleUrls: ['./pessoas-list.component.css']
})
export class PessoasListComponent implements OnInit {

  pessoas$: Observable<Pessoa[]>
  pessoa: Pessoa;
  pessoaDialogEndereco: boolean;

  constructor() { }

  ngOnInit(): void {
    this.pessoas$ = of([
      {
        id: '1',
        nome: 'John Stefan',
        cpf: '062.010.001.00',
        dataNascimento: '08/10/2000',
        email: 'johnstn1545@gmail.com',
        telefone: '62981066673',
        cep: '74474398',
        logradouro: 'Rua RB52 A',
        complemento: 'Perto do supermecado martins',
        numero: '0'
      }
    ]);
  }

  infoEndereco(pessoa: Pessoa) {
    this.pessoa = { ...pessoa };
    this.pessoaDialogEndereco = true;
  }

}
