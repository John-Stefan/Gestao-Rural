/* eslint-disable no-trailing-spaces */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'pessoas',
    loadChildren: () => import('./pessoas/pessoas.module').then(m => m.PessoasModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'patrimonios',
    loadChildren: () => import('./patrimonios/patrimonios.module').then(m => m.PatrimoniosModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'animais',
    loadChildren: () => import('./animais/animais.module').then(m => m.AnimaisModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'registros',
    loadChildren: () => import('./registros/registros.module').then(m => m.RegistrosModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'producoes',
    loadChildren: () => import('./producoes/producoes.module').then(m => m.ProducoesModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'funcionarios',
    loadChildren: () => import('./funcionarios/funcionarios.module').then( m => m.FuncionariosModule),
    canLoad: [AuthGuard]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
