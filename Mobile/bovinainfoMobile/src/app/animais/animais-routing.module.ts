import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'create/:id',
        loadChildren: () => import('./pages/animal-save/animal-save.module').then(m => m.AnimalSavePageModule)
      },
      {
        path: 'create',
        loadChildren: () => import('./pages/animal-save/animal-save.module').then(m => m.AnimalSavePageModule)
      },
      {
        path: 'edit/:id',
        loadChildren: () => import('./pages/animal-save/animal-save.module').then(m => m.AnimalSavePageModule)
      },
      {
        path: '',
        loadChildren: () => import('./pages/animais-list/animais-list.module').then(m => m.AnimaisListPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimaisRoutingModule { }
