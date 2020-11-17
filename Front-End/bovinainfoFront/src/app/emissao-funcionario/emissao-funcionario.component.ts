import { BoundElementPropertyAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../funcionario';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-emissao-funcionario',
  templateUrl: './emissao-funcionario.component.html',
  styleUrls: ['./emissao-funcionario.component.css']
})
export class EmissaoFuncionarioComponent implements OnInit {  
  
  funcionarioDialog: boolean;
  funcionario: Funcionario;
  funcionarios;
  selectedFuncionario;

  constructor(private funcionarioService : FuncionarioService) { }

  ngOnInit(): void {
    this.funcionarioService.getFuncionario().subscribe(resultado => (this.funcionarios = resultado));
    console.log(this.funcionarioService.getFuncionario());
  }

  public selectFuncionarios(funcionarios) {
    this.selectedFuncionario = funcionarios;
  }

  public infoFuncionario(funcionario: Funcionario) {
    this.funcionario = {...funcionario};
    this.funcionarioDialog = true;
  }
}
