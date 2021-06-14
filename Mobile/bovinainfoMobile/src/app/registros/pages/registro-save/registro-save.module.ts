import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroSavePageRoutingModule } from './registro-save-routing.module';

import { RegistroSavePage } from './registro-save.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroSavePageRoutingModule
  ],
  declarations: [RegistroSavePage]
})
export class RegistroSavePageModule {}
