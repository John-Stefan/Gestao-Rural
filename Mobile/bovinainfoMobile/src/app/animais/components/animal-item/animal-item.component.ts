import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from '../../models/animal.model';

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.scss'],
})
export class AnimalItemComponent {
  @Input() animal: Animal;
  @Output() update = new EventEmitter<Animal>();
  @Output() delete = new EventEmitter<Animal>();
}

