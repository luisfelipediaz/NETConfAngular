import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { TaskComponent } from './task.component';
import { State } from '../state.enum';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TaskComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;

    component.task = {
      id: 1,
      name: 'Task 1',
      description: 'Description task 1',
      date: new Date(2018, 0, 1),
      state: State.TODO
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe pintar la tarea como una tarjeta', () => {
    const task = fixture.debugElement.query(By.css('div.card'));

    expect(task.query(By.css('.card-title')).nativeElement.textContent).toBe('Task 1');
    expect(task.query(By.css('.card-subtitle')).nativeElement.textContent).toBe('Description task 1');
    expect(task.query(By.css('span.date')).nativeElement.textContent).toBe('01/01/2018');
  });


});
