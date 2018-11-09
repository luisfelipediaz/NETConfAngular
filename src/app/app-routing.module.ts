import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardComponent } from './board/board.component';
import { NewTaskComponent } from './new-task/new-task.component';

const routes: Routes = [
  {
    path: 'board',
    component: BoardComponent
  },
  {
    path: 'new-task',
    component: NewTaskComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/board'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
