import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
  exports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [MessageService, ConfirmationService]
})
export class CoreModule { }
