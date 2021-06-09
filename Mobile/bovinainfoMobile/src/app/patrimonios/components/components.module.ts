import { NgModule } from '@angular/core';
import { PatrimonioItemComponent } from './patrimonio-item/patrimonio-item.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PatrimonioItemComponent],
  imports: [SharedModule],
  exports: [PatrimonioItemComponent]
})
export class ComponentsModule { }
