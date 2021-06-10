import { NgModule } from '@angular/core';
import { PessoaSavePageRoutingModule } from './pessoa-save-routing.module';

import { PessoaSavePage } from './pessoa-save.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    PessoaSavePageRoutingModule
  ],
  declarations: [PessoaSavePage]
})
export class PessoaSavePageModule { }
