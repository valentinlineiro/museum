import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArtistRoutingModule } from './artist-routing.module';
import { ListComponent } from './component/list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, ArtistRoutingModule],
})
export class ArtistModule {}
