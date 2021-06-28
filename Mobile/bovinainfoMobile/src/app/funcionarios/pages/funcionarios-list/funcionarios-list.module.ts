import { NgModule } from '@angular/core';
import { FuncionariosListPageRoutingModule } from './funcionarios-list-routing.module';

import { FuncionariosListPage } from './funcionarios-list.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    SharedModule,
    FuncionariosListPageRoutingModule
  ],
  declarations: [FuncionariosListPage]
})
export class FuncionariosListPageModule {}
