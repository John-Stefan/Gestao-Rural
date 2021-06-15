import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalSavePage } from './animal-save.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalSavePageRoutingModule {}
