import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule }   from '@angular/forms';
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
import { AppComponent } from './app.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { EmissaoFuncionarioComponent } from './emissao-funcionario/emissao-funcionario.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FuncionarioService } from './funcionario.service';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroFuncionarioComponent,
    EmissaoFuncionarioComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegistroComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule, 
    MenubarModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    CalendarModule, 
    InputNumberModule,
    FormsModule,
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
    DropdownModule
  ],
  providers: [FuncionarioService, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

