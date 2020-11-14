import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Inicio'
      },
      {
        label: 'Perfil'
      },
      {
        label: 'Controle de Produção'
      },
      {
        label: 'Cadastros',
        items:[
          {
            label: 'Funcionarios'
          },
          {
            label: 'Patrimonios'
          },
          {
            label: 'Animais'
          }
        ]
      },
      {
        label: 'Emissões',
        items:[
          {
            label: 'Funcionarios'
          },
          {
            label: 'Patrimonios'
          },
          {
            label: 'Animais'
          }
        ]
      }
    ];
  }

}
