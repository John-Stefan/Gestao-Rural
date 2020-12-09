import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
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
        label: 'Inicio',
        routerLink: 'home',
        icon: 'pi pi-home',            
      },
      {
        label: 'Perfil',
        icon: 'pi pi-user'                
      },
      {
        label: 'Controle de Produção',
        icon: 'pi pi-chart-bar',
        routerLink: 'controle-producao',
        items:[
          {
            label: 'Registro'
          },
          {
            label: 'Produção'
          },
          {
            label: 'Estatisticas'
          }
        ]      
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
            label: 'Patrimonios',
            routerLink: 'cadastro-patrimonio'
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
            label: 'Funcionarios',
            routerLink: 'emissao-funcionario'
          },
          {
            label: 'Patrimonios',
            routerLink: 'emissao-patrimonio'
          },
          {
            label: 'Animais'
          }
        ]
      }
    ];
  }

}
