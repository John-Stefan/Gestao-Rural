import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProducoesListPageRoutingModule } from './producoes-list-routing.module';

import { ProducoesListPage } from './producoes-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProducoesListPageRoutingModule
  ],
  declarations: [ProducoesListPage]
})
export class ProducoesListPageModule {}
