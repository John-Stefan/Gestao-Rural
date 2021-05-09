import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pessoa } from '../../models/pessoa.model';

@Component({
  selector: 'app-pessoa-item',
  templateUrl: './pessoa-item.component.html',
  styleUrls: ['./pessoa-item.component.scss'],
})
export class PessoaItemComponent {
  @Input() pessoa: Pessoa;
  @Output() update = new EventEmitter<Pessoa>();
  @Output() delete = new EventEmitter<Pessoa>();
}
