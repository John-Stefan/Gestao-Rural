//import { NgModule } from '@angular/core';
//import { AnimaisListPageRoutingModule } from './animais-list-routing.module';

//import { AnimaisListPage } from './animais-list.page';
//import { SharedModule } from 'src/app/shared/shared.module';
//import { ComponentsModule } from '../../components/components.module';
import { ComponentsModule } from 'src/app/animais/components/components.module';
import { AnimaisListPageRoutingModule } from './animais-list-routing.module';
import { NgModule } from '@angular/core';
import { AnimaisListPage } from './animais-list.page';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    AnimaisListPageRoutingModule
  ],
  declarations: [AnimaisListPage]
})
export class AnimaisListPageModule { }
