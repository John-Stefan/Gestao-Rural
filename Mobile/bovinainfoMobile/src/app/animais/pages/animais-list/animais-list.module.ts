import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimaisListPageRoutingModule } from './animais-list-routing.module';

import { AnimaisListPage } from './animais-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimaisListPageRoutingModule
  ],
  declarations: [AnimaisListPage]
})
export class AnimaisListPageModule {}
