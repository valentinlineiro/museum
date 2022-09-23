import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModule } from './material/material.module';

@NgModule({
  exports: [MaterialModule, MatToolbarModule],
})
export class SharedModule {}
