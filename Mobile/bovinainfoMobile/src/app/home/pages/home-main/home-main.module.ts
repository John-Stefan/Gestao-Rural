import { NgModule } from '@angular/core';
import { HomeMainPageRoutingModule } from './home-main-routing.module';

import { HomeMainPage } from './home-main.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    HomeMainPageRoutingModule
  ],
  declarations: [HomeMainPage]
})
export class HomeMainPageModule { }
