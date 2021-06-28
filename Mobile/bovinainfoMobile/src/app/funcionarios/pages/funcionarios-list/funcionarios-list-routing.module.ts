import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncionariosListPage } from './funcionarios-list.page';

const routes: Routes = [
  {
    path: '',
    component: FuncionariosListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncionariosListPageRoutingModule {}
