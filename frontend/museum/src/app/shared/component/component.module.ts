import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { ToolbarModule } from './toolbar/toolbar.module';

@NgModule({
  exports: [ToolbarModule, ButtonModule],
})
export class ComponentModule {}
