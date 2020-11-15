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
        label: 'Perfil',
        icon: 'pi pi-user'
      },
      {
        label: 'Controle de Produção',
        icon: 'pi pi-chart-bar'
      },
      {
        label: 'Cadastros',
        icon: 'pi pi-calendar-plus',
        items:[
          {
            label: 'Funcionarios',
            routerLink: 'cadastro-funcionario'
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
        icon: 'pi pi-list',
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
