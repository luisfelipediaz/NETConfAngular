import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { State } from '../state.enum';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent {
  @Input() state: State;

  @Output() previus: EventEmitter<void> = new EventEmitter<void>();
  @Output() next: EventEmitter<void> = new EventEmitter<void>();
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  prevState() {
    this.previus.emit();
  }

  remove() {
    this.delete.next();
  }

  nextState() {
    this.next.emit();
  }

}
