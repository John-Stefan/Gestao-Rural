import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/funcionarios-list/funcionarios-list.module').then(m => m.FuncionariosListPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/funcionario-save/funcionario-save.module').then( m => m.FuncionarioSavePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
