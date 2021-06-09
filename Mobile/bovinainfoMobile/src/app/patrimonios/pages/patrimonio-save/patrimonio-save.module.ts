import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatrimonioSavePageRoutingModule } from './patrimonio-save-routing.module';

import { PatrimonioSavePage } from './patrimonio-save.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatrimonioSavePageRoutingModule
  ],
  declarations: [PatrimonioSavePage]
})
export class PatrimonioSavePageModule {}
