import { NgModule } from '@angular/core';
import { PatrimoniosListPageRoutingModule } from './patrimonios-list-routing.module';

import { PatrimoniosListPage } from './patrimonios-list.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/patrimonios/components/components.module';

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    PatrimoniosListPageRoutingModule
  ],
  declarations: [PatrimoniosListPage]
})
export class PatrimoniosListPageModule { }
