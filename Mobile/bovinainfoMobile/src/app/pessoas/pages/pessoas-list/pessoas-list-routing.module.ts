import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoasListPage } from './pessoas-list.page';

const routes: Routes = [
  {
    path: '',
    component: PessoasListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoasListPageRoutingModule {}
