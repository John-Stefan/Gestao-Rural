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
        loadChildren: () => import('./pages/pessoa-save/pessoa-save.module').then(m => m.PessoaSavePageModule)
      },
      {
        path: 'edit/:id',
        loadChildren: () => import('./pages/pessoa-save/pessoa-save.module').then(m => m.PessoaSavePageModule)
      },
      {
        path: '',
        loadChildren: () => import('./pages/pessoas-list/pessoas-list.module').then(m => m.PessoasListPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }
