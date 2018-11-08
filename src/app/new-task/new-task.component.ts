import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html'
})
export class NewTaskComponent implements OnInit {
  register: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.register = this.fb.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      date: [null, Validators.required]
    });
  }

  save() {

  }

}
