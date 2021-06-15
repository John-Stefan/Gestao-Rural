import { NgModule } from '@angular/core';
import { AnimalItemComponent } from './animal-item/animal-item.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AnimalItemComponent],
  imports: [SharedModule],
  exports: [AnimalItemComponent]
})
export class ComponentsModule { }
