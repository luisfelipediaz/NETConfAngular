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

  let tasksServiceMock: TasksService;

  beforeEach(async(() => {
    tasksServiceMock = jasmine.createSpyObj('TasksService', {
      getGrouped: of({})
    });

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [BoardComponent],
      providers: [
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
    const columnas = fixture.debugElement.queryAll(By.css('app-column'));

    expect(columnas.length).toBe(3);
  });

});
