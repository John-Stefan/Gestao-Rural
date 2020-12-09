import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { ControleProducaoComponent } from './controle-producao/controle-producao.component';
import { EmissaoFuncionarioComponent } from './emissao-funcionario/emissao-funcionario.component';
import {CadastroPatrimonioComponent} from './cadastro-patrimonio/cadastro-patrimonio.component';
import {EmissaoPatrimonioComponent } from './emissao-patrimonio/emissao-patrimonio.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "cadastro-funcionario", component: CadastroFuncionarioComponent},
  {path: "emissao-funcionario", component: EmissaoFuncionarioComponent},
  {path: "controle-producao", component: ControleProducaoComponent},
  {path: "cadastro-patrimonio", component: CadastroPatrimonioComponent},
  {path: "emissao-patrimonio", component: EmissaoPatrimonioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
