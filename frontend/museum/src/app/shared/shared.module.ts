import { NgModule } from '@angular/core';
import { ComponentModule } from './component/component.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  exports: [MaterialModule, ComponentModule],
})
export class SharedModule {}
