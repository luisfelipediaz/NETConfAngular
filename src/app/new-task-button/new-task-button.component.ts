import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-task-button',
  templateUrl: './new-task-button.component.html',
  styles: [
    `
    .new-task:hover {
        cursor: pointer;
        border-color: green;
        color: green;
    }
    `
  ]
})
export class NewTaskButtonComponent {

  constructor(
    private router: Router
  ) { }

  goToNewTask() {
    this.router.navigateByUrl('/new-task');
  }

}
