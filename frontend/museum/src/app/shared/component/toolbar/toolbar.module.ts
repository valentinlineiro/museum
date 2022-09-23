import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { ListToolbarComponent } from './list-toolbar/list-toolbar.component';

@NgModule({
  declarations: [ListToolbarComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ListToolbarComponent],
})
export class ToolbarModule {}
