import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FuncionarioItemComponent } from './funcionario-item/funcionario-item.component';

@NgModule({
  declarations: [FuncionarioItemComponent],
  imports: [SharedModule],
  exports: [FuncionarioItemComponent]
})
export class ComponentsModule { }
