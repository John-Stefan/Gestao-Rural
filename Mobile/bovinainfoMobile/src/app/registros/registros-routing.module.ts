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
        loadChildren: () => import('./pages/registro-save/registro-save.module').then(m => m.RegistroSavePageModule)
      },
      {
        path: 'edit/:id',
        loadChildren: () => import('./pages/registro-save/registro-save.module').then(m => m.RegistroSavePageModule)
      },
      {
        path: '',
        loadChildren: () => import('./pages/registros-list/registros-list.module').then(m => m.RegistrosListPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrosRoutingModule { }
