import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html'
})
export class NewTaskComponent implements OnInit {
  register: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskService: TasksService,
    private router: Router
  ) { }

  ngOnInit() {
    this.register = this.fb.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      date: [null, Validators.required]
    });
  }

  save() {
    this.taskService
      .add(this.register.value)
      .subscribe(() => {
        this.router.navigateByUrl('/board');
        alert('Tarea registrada con éxito');
      });
  }

}
