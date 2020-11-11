import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-emissao-funcionario',
  templateUrl: './emissao-funcionario.component.html',
  styleUrls: ['./emissao-funcionario.component.css']
})
export class EmissaoFuncionarioComponent implements OnInit {

  funcionarios;  
  selectedFuncionario;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getFuncionario().subscribe(resultado => (this.funcionarios = resultado));
  }

  public selectFuncionarios(funcionarios) {
    this.selectedFuncionario = funcionarios;
  }
}
