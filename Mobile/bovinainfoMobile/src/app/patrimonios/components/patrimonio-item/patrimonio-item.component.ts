import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Patrimonio } from '../../models/patrimonio.model';

@Component({
  selector: 'app-patrimonio-item',
  templateUrl: './patrimonio-item.component.html',
  styleUrls: ['./patrimonio-item.component.scss'],
})
export class PatrimonioItemComponent {
  @Input() patrimonio: Patrimonio;
  @Output() update = new EventEmitter<Patrimonio>();
  @Output() delete = new EventEmitter<Patrimonio>();
}

