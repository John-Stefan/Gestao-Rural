import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProducaoItemComponent } from './producao-item/producao-item.component';

@NgModule({
  declarations: [ProducaoItemComponent],
  imports: [SharedModule],
  exports: [ProducaoItemComponent]
})
export class ComponentsModule { }
