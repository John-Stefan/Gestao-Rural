import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { TabMenuModule } from 'primeng/tabmenu';
import { DropdownModule } from 'primeng/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { RatingModule } from 'primeng/rating';
import { EditorModule } from 'primeng/editor';

import { AppComponent } from './app.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { EmissaoFuncionarioComponent } from './emissao-funcionario/emissao-funcionario.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { EmissaoPatrimonioComponent } from './emissao-patrimonio/emissao-patrimonio.component';
import { CadastroPatrimonioComponent } from './cadastro-patrimonio/cadastro-patrimonio.component';
import { RegistroComponent } from './registro/registro.component';
import { ProducaoComponent } from './producao/producao.component';
import { CadastroAnimalComponent } from './cadastro-animal/cadastro-animal.component';
import { EmissaoAnimalComponent } from './emissao-animal/emissao-animal.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { environment } from 'src/environments/environment';
import { PessoasListComponent } from './pessoas/pages/pessoas-list/pessoas-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroFuncionarioComponent,
    EmissaoFuncionarioComponent,
    EmissaoPatrimonioComponent,
    CadastroPatrimonioComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegistroComponent,
    ProducaoComponent,
    CadastroAnimalComponent,
    EmissaoAnimalComponent,
    LoginComponent,
    PessoasListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    CalendarModule,
    InputNumberModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    DynamicDialogModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    TabMenuModule,
    DropdownModule,
    RatingModule,
    EditorModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ProgressSpinnerModule
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

