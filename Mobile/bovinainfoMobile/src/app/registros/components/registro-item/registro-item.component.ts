import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Registro } from '../../models/registro.model';

@Component({
  selector: 'app-registro-item',
  templateUrl: './registro-item.component.html',
  styleUrls: ['./registro-item.component.scss'],
})
export class RegistroItemComponent {
  @Input() registro: Registro;
  @Output() update = new EventEmitter<Registro>();
  @Output() delete = new EventEmitter<Registro>();
}
