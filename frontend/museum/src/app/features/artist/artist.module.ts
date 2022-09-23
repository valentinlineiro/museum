import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ArtistRoutingModule } from './artist-routing.module';
import { ListComponent } from './component/list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, SharedModule, ArtistRoutingModule],
})
export class ArtistModule {}
