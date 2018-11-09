import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ColumnComponent } from './column.component';
import { State } from '../state.enum';

describe('ColumnComponent', () => {
  let component: ColumnComponent;
  let fixture: ComponentFixture<ColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnComponent);
    component = fixture.componentInstance;
    component.tasks = [
      {
        id: 1,
        name: 'Task 1',
        description: 'Description task 1',
        date: new Date(2018, 0, 1),
        state: State.TODO
      },
      {
        id: 2,
        name: 'Task 2',
        description: 'Description task 2',
        date: new Date(2018, 1, 1),
        state: State.TODO
      },
      {
        id: 3,
        name: 'Task 3',
        description: 'Description task 3',
        date: new Date(2018, 2, 1),
        state: State.TODO
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe pintar 3 tareas en la columnas de TODO', () => {
    const tasks = fixture.debugElement.queryAll(By.css('app-task'));

    expect(tasks.length).toBe(3);
  });
});
