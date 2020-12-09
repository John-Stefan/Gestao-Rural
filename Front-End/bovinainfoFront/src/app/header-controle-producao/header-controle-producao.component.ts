import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header-controle-producao',
  templateUrl: './header-controle-producao.component.html',
  styleUrls: ['./header-controle-producao.component.css']
})
export class HeaderControleProducaoComponent implements OnInit {

  constructor() { }

  items: MenuItem[];
  activeItem: MenuItem;

  ngOnInit(): void {
    this.items = [ 
      {label: 'Registro', routerLink: '/registro'},
      {label: 'Produção'},
      {label: 'Observações'},
      {label: 'Estatísticas'}
    ];

    this.activeItem = this.items[0];
  }
}
