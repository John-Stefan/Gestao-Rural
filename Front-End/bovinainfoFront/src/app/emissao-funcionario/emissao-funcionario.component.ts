import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-emissao-funcionario',
  templateUrl: './emissao-funcionario.component.html',
  styleUrls: ['./emissao-funcionario.component.css']
})
export class EmissaoFuncionarioComponent implements OnInit {

  funcionarios;
  selectedFuncionarios;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.funcionarios = this.dataService.getContacts();
  }

  public selectFuncionarios(funcionarios) {
    this.selectFuncionarios = funcionarios;
  }

}
