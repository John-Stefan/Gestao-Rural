/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Pessoa } from '../../models/pessoa.model';
import { PessoasService } from '../../services/pessoas.service';

@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.page.html',
  styleUrls: ['./pessoas-list.page.scss'],
})
export class PessoasListPage {

  pessoas$: Observable<Pessoa[]>;

  constructor(private pessoasService: PessoasService) { }

  ionViewDidEnter(): void {
    this.pessoas$ = this.pessoasService.getAll();
  }
}
