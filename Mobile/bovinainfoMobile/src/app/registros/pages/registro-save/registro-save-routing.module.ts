import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroSavePage } from './registro-save.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroSavePageRoutingModule {}
