import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Funcionario } from '../../models/funcionario.model';

@Component({
  selector: 'app-funcionario-item',
  templateUrl: './funcionario-item.component.html',
  styleUrls: ['./funcionario-item.component.scss'],
})
export class FuncionarioItemComponent {
  @Input() funcionario: Funcionario;
  @Output() update = new EventEmitter<Funcionario>();
  @Output() delete = new EventEmitter<Funcionario>();
}
