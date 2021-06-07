import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoaSavePage } from './pessoa-save.page';

const routes: Routes = [
  {
    path: '',
    component: PessoaSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoaSavePageRoutingModule {}
