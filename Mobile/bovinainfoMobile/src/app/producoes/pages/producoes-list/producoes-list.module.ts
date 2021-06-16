import { NgModule } from '@angular/core';
import { ProducoesListPageRoutingModule } from './producoes-list-routing.module';

import { ProducoesListPage } from './producoes-list.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    ProducoesListPageRoutingModule
  ],
  declarations: [ProducoesListPage]
})
export class ProducoesListPageModule { }
