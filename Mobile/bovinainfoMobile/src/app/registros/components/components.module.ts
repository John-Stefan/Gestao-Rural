import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroItemComponent } from './registro-item/registro-item.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RegistroItemComponent],
  imports: [SharedModule],
  exports: [RegistroItemComponent]
})
export class ComponentsModule { }
