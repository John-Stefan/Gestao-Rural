import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pessoa } from '../../models/pessoa.model';

@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.page.html',
  styleUrls: ['./pessoas-list.page.scss'],
})
export class PessoasListPage implements OnInit {

  pessoas$: Observable<Pessoa[]>;

  constructor() { }

  ngOnInit(): void {
    this.pessoas$ = of([
      {
        id: '1',
        nome: 'Gilcilene',
        telefone: '62984758833',
        cpf: '23498764522',
        dataNascimento: '20/02/2000',
      },
      {
        id: '2',
        nome: 'Jerfesson',
        telefone: '64892387264',
        cpf: '098643732312',
        dataNascimento: '11/02/1995',
      },
      {
        id: '3',
        nome: 'Isabella',
        telefone: '62985762856',
        cpf: '09725367482',
        dataNascimento: '10/10/1990',
      }
    ]);
  }

}
