import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-toolbar',
  templateUrl: './edit-toolbar.component.html',
  styleUrls: ['./edit-toolbar.component.scss'],
})
export class EditToolbarComponent implements OnInit {
  @Input() title!: string;
  @Input() back!: string;
  @Input() disabled!: boolean;

  @Output() save: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onExit(): void {
    this.router.navigate([this.back]);
  }

  onSave() {
    this.save.emit();
  }
}
