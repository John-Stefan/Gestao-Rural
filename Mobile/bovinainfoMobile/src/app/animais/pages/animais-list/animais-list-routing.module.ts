import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimaisListPage } from './animais-list.page';

const routes: Routes = [
  {
    path: '',
    component: AnimaisListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimaisListPageRoutingModule {}
