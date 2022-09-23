import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { FabComponent } from './fab/fab.component';

@NgModule({
  declarations: [FabComponent],
  imports: [CommonModule, MaterialModule],
  exports: [FabComponent],
})
export class ButtonModule {}
