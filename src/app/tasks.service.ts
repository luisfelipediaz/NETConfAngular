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

  get(): Observable<Tasks> {
    return this.http.get<Tasks>(environment.urlTasks);
  }

  getGrouped(): Observable<TasksGrouped> {
    return this.http.get<Tasks>(environment.urlTasks).pipe(
      map(tasks =>
        tasks.reduce((prev, task) => this.pushTaskToDictionary(prev, task), {})
      )
    );
  }

  add(task: Task): Observable<string> {
    return this.http.post<string>(environment.urlTasks, task);
  }

  modify(task: Task): Observable<boolean> {
    return this.http.put<boolean>(`${environment.urlTasks}/${task.id}`, task);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.urlTasks}/${id}`);
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
