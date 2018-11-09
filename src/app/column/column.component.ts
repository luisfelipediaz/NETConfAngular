import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tasks } from '../task';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
  // lane
})
export class ColumnComponent {
  @Input() name: string;
  @Input() tasks: Tasks;
  @Output() change: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  changeTask() {
    this.change.emit();
  }
}
