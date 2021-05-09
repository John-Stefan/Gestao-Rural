import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PessoasListPageRoutingModule } from './pessoas-list-routing.module';

import { PessoasListPage } from './pessoas-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PessoasListPageRoutingModule
  ],
  declarations: [PessoasListPage]
})
export class PessoasListPageModule {}
