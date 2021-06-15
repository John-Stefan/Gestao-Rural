import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producao } from '../../models/producao.model';

@Component({
  selector: 'app-producao-item',
  templateUrl: './producao-item.component.html',
  styleUrls: ['./producao-item.component.scss'],
})
export class ProducaoItemComponent {
  @Input() producao: Producao;
  @Output() update = new EventEmitter<Producao>();
  @Output() delete = new EventEmitter<Producao>();
}
