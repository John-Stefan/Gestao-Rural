import { NgModule } from '@angular/core';

import { PatrimonioSavePageRoutingModule } from './patrimonio-save-routing.module';

import { PatrimonioSavePage } from './patrimonio-save.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    PatrimonioSavePageRoutingModule
  ],
  declarations: [PatrimonioSavePage]
})
export class PatrimonioSavePageModule { }
