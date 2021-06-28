import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncionarioSavePage } from './funcionario-save.page';

const routes: Routes = [
  {
    path: '',
    component: FuncionarioSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncionarioSavePageRoutingModule {}
