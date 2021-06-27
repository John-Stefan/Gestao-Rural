import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoasRoutingModule } from './pessoas-routing.module';
import { PessoaGridComponent } from './components/pessoa-grid/pessoa-grid.component';


@NgModule({
  declarations: [PessoaGridComponent],
  imports: [
    CommonModule,
    PessoasRoutingModule
  ]
})
export class PessoasModule { }
