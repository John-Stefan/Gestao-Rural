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
        loadChildren: () => import('./pages/patrimonio-save/patrimonio-save.module').then(m => m.PatrimonioSavePageModule)
      },
      {
        path: 'edit/:id',
        loadChildren: () => import('./pages/patrimonio-save/patrimonio-save.module').then(m => m.PatrimonioSavePageModule)
      },
      {
        path: '',
        loadChildren: () => import('./pages/patrimonios-list/patrimonios-list.module').then(m => m.PatrimoniosListPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatrimoniosRoutingModule { }
