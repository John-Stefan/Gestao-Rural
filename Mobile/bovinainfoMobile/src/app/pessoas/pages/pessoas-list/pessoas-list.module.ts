import { NgModule } from '@angular/core';
import { PessoasListPageRoutingModule } from './pessoas-list-routing.module';

import { PessoasListPage } from './pessoas-list.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    PessoasListPageRoutingModule
  ],
  declarations: [PessoasListPage]
})
export class PessoasListPageModule { }
