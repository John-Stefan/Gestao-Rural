import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProducaoSavePageRoutingModule } from './producao-save-routing.module';

import { ProducaoSavePage } from './producao-save.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProducaoSavePageRoutingModule
  ],
  declarations: [ProducaoSavePage]
})
export class ProducaoSavePageModule {}
