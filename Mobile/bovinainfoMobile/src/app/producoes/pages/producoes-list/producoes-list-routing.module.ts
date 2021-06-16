import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProducoesListPage } from './producoes-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProducoesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProducoesListPageRoutingModule {}
