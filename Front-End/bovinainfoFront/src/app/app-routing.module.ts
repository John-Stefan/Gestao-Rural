import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { EmissaoFuncionarioComponent } from './emissao-funcionario/emissao-funcionario.component';
import { CadastroPatrimonioComponent } from './cadastro-patrimonio/cadastro-patrimonio.component';
import { EmissaoPatrimonioComponent } from './emissao-patrimonio/emissao-patrimonio.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { ProducaoComponent } from './producao/producao.component';
import { CadastroAnimalComponent } from './cadastro-animal/cadastro-animal.component';
import { EmissaoAnimalComponent } from './emissao-animal/emissao-animal.component';
import { LoginComponent } from './auth/pages/login/login.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "cadastro-funcionario", component: CadastroFuncionarioComponent },
  { path: "emissao-funcionario", component: EmissaoFuncionarioComponent },
  { path: "cadastro-patrimonio", component: CadastroPatrimonioComponent },
  { path: "emissao-patrimonio", component: EmissaoPatrimonioComponent },
  { path: "registro", component: RegistroComponent },
  { path: "producao", component: ProducaoComponent },
  { path: "cadastro-animal", component: CadastroAnimalComponent },
  { path: "emissao-animal", component: EmissaoAnimalComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
