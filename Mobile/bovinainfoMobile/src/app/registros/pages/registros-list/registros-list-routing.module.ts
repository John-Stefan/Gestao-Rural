import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrosListPage } from './registros-list.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrosListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrosListPageRoutingModule {}
