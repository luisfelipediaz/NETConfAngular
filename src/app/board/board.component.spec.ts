import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { of } from 'rxjs';

import { BoardComponent } from './board.component';
import { State } from '../state.enum';
import { TasksService } from '../tasks.service';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  let routerMock: Router;
  let tasksServiceMock: TasksService;

  beforeEach(async(() => {

    routerMock = jasmine.createSpyObj('Router', ['navigateByUrl']);

    tasksServiceMock = jasmine.createSpyObj('TasksService', {
      getGrouped: of({
        TODO: [
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
        ]
      })
    });

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [BoardComponent],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: TasksService, useValue: tasksServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe pintar 3 columnas con cada uno de los estados del TODO list', () => {
    const columnas = fixture.debugElement.queryAll(By.css('.col-4'));
    const [TODO, WIP, DONE] = columnas;

    expect(columnas.length).toBe(3);
    expect(TODO.query(By.css('h2')).nativeElement.textContent).toBe('TODO');
    expect(WIP.query(By.css('h2')).nativeElement.textContent).toBe('WIP');
    expect(DONE.query(By.css('h2')).nativeElement.textContent).toBe('DONE');
  });

  it('debe pintar 3 tareas en la columnas de TODO', () => {
    const tasks = fixture.debugElement.queryAll(By.css('app-task'));

    expect(tasks.length).toBe(3);
  });
});
