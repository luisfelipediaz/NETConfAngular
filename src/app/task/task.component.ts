import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() change: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private tasksService: TasksService
  ) { }

  ngOnInit() {
  }

  nextState() {
    this.task.state++;
    this.modifyAndNotify();
  }

  prevState() {
    this.task.state--;
    this.modifyAndNotify();
  }

  remove() {
    this.tasksService.delete(this.task.id);
  }

  private modifyAndNotify() {
    this.tasksService.modify(this.task)
      .subscribe(() => {
        this.change.emit();
      });
  }

}
