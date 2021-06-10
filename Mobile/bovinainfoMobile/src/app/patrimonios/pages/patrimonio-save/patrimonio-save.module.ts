import { NgModule } from '@angular/core';

import { PatrimonioSavePageRoutingModule } from './patrimonio-save-routing.module';

import { PatrimonioSavePage } from './patrimonio-save.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/patrimonios/components/components.module';

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    PatrimonioSavePageRoutingModule
  ],
  declarations: [PatrimonioSavePage]
})
export class PatrimonioSavePageModule { }
