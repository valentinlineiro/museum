import { Component, Input } from '@angular/core';
import { SidenavService } from 'src/app/core/service/sidenav/sidenav.service';

@Component({
  selector: 'app-list-toolbar',
  templateUrl: './list-toolbar.component.html',
  styleUrls: ['./list-toolbar.component.scss'],
})
export class ListToolbarComponent {
  @Input() title!: string;

  constructor(private sidenavService: SidenavService) {}

  onMenu(): void {
    this.sidenavService.toggle();
  }
}
