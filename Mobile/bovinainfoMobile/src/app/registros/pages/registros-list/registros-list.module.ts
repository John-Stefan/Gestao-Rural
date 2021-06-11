import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrosListPageRoutingModule } from './registros-list-routing.module';

import { RegistrosListPage } from './registros-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrosListPageRoutingModule
  ],
  declarations: [RegistrosListPage]
})
export class RegistrosListPageModule {}
