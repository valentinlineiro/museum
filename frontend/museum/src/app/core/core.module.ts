import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  declarations: [ShellComponent],
  imports: [CommonModule],
  exports: [ShellComponent],
})
export class CoreModule {}
