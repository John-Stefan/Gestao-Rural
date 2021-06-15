import { NgModule } from '@angular/core';

import { AnimalSavePageRoutingModule } from './animal-save-routing.module';

import { AnimalSavePage } from './animal-save.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/animais/components/components.module';

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    AnimalSavePageRoutingModule
  ],
  declarations: [AnimalSavePage]
})
export class AnimalSavePageModule { }
