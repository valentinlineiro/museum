import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
})
export class FabComponent {
  @Input() color: string = 'primary';
  @Input() icon: string = 'add';
  @Output() fabClick: EventEmitter<any> = new EventEmitter<any>();

  onClick(): void {
    this.fabClick.emit();
  }
}
