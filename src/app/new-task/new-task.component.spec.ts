import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { of } from 'rxjs';

import { NewTaskComponent } from './new-task.component';
import { TasksService } from '../tasks.service';
import { Task } from '../task';
import { Router } from '@angular/router';

describe('NewTaskComponent', () => {
  let component: NewTaskComponent;
  let fixture: ComponentFixture<NewTaskComponent>;
  let taskServiceMock: TasksService;
  let routerMock: Router;

  beforeEach(async(() => {

    taskServiceMock = jasmine.createSpyObj('TasksService', {
      newTask: of('OK')
    });

    routerMock = jasmine.createSpyObj('Router', ['navigateByUrl']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      declarations: [NewTaskComponent],
      providers: [
        { provide: TasksService, useValue: taskServiceMock },
        { provide: Router, useValue: routerMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe pintar el formulario de creación de nueva tarea', () => {
    const name = fixture.debugElement.query(By.css('input[name="name"]'));
    const description = fixture.debugElement.query(By.css('input[name="description"]'));
    const date = fixture.debugElement.query(By.css('input[type="date"][name="date"]'));

    expect(name).toBeTruthy();
    expect(description).toBeTruthy();
    expect(date).toBeTruthy();
  });

  it('debe pintar el boton de submit', () => {
    const boton = fixture.debugElement.query(By.css('button[type="submit"]'));

    expect(boton).toBeTruthy();
  });

  it('debe llamar el servicio de guardado cuando el formulario esta completo', () => {
    const expected: Task = <Task>{
      name: 'task1',
      description: 'desc',
      date: new Date()
    };

    component.register.setValue(expected);

    component.save();

    expect(taskServiceMock.newTask).toHaveBeenCalledWith(expected);
  });
});
