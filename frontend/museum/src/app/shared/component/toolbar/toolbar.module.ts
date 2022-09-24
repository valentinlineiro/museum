import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { ListToolbarComponent } from './list-toolbar/list-toolbar.component';
import { EditToolbarComponent } from './edit-toolbar/edit-toolbar.component';

@NgModule({
  declarations: [ListToolbarComponent, EditToolbarComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ListToolbarComponent, EditToolbarComponent],
})
export class ToolbarModule {}
