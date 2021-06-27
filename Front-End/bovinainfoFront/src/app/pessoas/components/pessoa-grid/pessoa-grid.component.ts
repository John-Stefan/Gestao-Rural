import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pessoa } from '../../models/pessoa.model';

@Component({
  selector: 'app-pessoa-grid',
  templateUrl: './pessoa-grid.component.html',
  styleUrls: ['./pessoa-grid.component.css']
})
export class PessoaGridComponent {
  @Input() pessoa: Pessoa;
  @Output() update = new EventEmitter<Pessoa>();
  @Output() delete = new EventEmitter<Pessoa>();
}
