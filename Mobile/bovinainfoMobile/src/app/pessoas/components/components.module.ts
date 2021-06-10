import { NgModule } from '@angular/core';
import { PessoaItemComponent } from './pessoa-item/pessoa-item.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PessoaItemComponent],
  imports: [SharedModule],
  exports: [PessoaItemComponent]
})
export class ComponentsModule { }
