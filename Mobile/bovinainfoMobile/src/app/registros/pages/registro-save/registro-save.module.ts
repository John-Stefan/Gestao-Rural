import { NgModule } from '@angular/core';
import { RegistroSavePageRoutingModule } from './registro-save-routing.module';

import { RegistroSavePage } from './registro-save.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RegistroSavePageRoutingModule
  ],
  declarations: [RegistroSavePage]
})
export class RegistroSavePageModule { }
