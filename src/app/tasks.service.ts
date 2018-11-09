import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TasksGrouped, Tasks, Task } from './task';
import { State } from './state.enum';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Tasks> {
    return this.http.get<Tasks>(environment.urlTasks);
  }

  getTasksGrouped(): Observable<TasksGrouped> {
    return this.http.get<Tasks>('').pipe(
      map(tasks =>
        tasks.reduce((prev, task) => this.pushTaskToDictionary(prev, task), {})
      )
    );
  }

  private pushTaskToDictionary(tasksGrouped: TasksGrouped, task: Task): TasksGrouped {
    this.verifyArrayExists(tasksGrouped, task);
    this.addTaskToDictionary(tasksGrouped, task);
    return tasksGrouped;
  }

  private addTaskToDictionary(tasksGrouped: TasksGrouped, task: Task) {
    tasksGrouped[State[task.state]].push(task);
  }

  private verifyArrayExists(tasksGrouped: TasksGrouped, task: Task) {
    tasksGrouped[State[task.state]] = tasksGrouped[State[task.state]] || [];
  }
}
