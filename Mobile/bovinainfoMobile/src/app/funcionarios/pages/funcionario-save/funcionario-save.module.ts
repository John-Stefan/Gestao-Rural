import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuncionarioSavePageRoutingModule } from './funcionario-save-routing.module';

import { FuncionarioSavePage } from './funcionario-save.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    FuncionarioSavePageRoutingModule
  ],
  declarations: [FuncionarioSavePage]
})
export class FuncionarioSavePageModule {}
