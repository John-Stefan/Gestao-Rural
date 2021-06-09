import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatrimonioSavePage } from './patrimonio-save.page';

const routes: Routes = [
  {
    path: '',
    component: PatrimonioSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatrimonioSavePageRoutingModule {}
