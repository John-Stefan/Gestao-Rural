import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../../models/pessoa.model';
import { PessoasService } from '../../services/pessoas.service';

@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.component.html',
  styleUrls: ['./pessoas-list.component.css']
})
export class PessoasListComponent implements OnInit {

  pessoas$: Observable<Pessoa[]>
  pessoa: Pessoa;
  loading: boolean;
  pessoaDialogEndereco: boolean;

  constructor(private pessoasService: PessoasService) { }

  ngOnInit(): void {
    this.pessoas$ = this.pessoasService.getAll();
  }

  infoEndereco(pessoa: Pessoa) {
    this.pessoa = { ...pessoa };
    this.pessoaDialogEndereco = true;
  }

}
