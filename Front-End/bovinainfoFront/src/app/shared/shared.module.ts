import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  exports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
