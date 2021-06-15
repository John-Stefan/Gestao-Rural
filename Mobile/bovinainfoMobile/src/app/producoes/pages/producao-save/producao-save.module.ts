import { NgModule } from '@angular/core';
import { ProducaoSavePageRoutingModule } from './producao-save-routing.module';

import { ProducaoSavePage } from './producao-save.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ProducaoSavePageRoutingModule
  ],
  declarations: [ProducaoSavePage]
})
export class ProducaoSavePageModule { }
