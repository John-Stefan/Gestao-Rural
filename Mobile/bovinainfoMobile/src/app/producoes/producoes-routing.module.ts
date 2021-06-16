import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'create',
        loadChildren: () => import('./pages/producao-save/producao-save.module').then(m => m.ProducaoSavePageModule)
      },
      {
        path: 'edit/:id',
        loadChildren: () => import('./pages/producao-save/producao-save.module').then(m => m.ProducaoSavePageModule)
      },
      {
        path: '',
        loadChildren: () => import('./pages/producoes-list/producoes-list.module').then(m => m.ProducoesListPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProducoesRoutingModule { }
