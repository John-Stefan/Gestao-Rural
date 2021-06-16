import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProducaoSavePage } from './producao-save.page';

const routes: Routes = [
  {
    path: '',
    component: ProducaoSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProducaoSavePageRoutingModule {}
