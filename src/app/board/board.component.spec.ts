import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import { By } from '@angular/platform-browser';
import { Tasks } from '../task';
import { State } from '../state.enum';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardComponent]
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
    component.tasks = <Tasks>[
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

    const tasks = fixture.debugElement.queryAll(By.css('div.card'));
    const [task1, task2, task3] = tasks;

    expect(tasks.length).toBe(3);
    expect(task1.query(By.css('.card-title')).nativeElement.textContent).toBe('Task 1');
    expect(task1.query(By.css('.card-subtitle')).nativeElement.textContent).toBe('Description task 1');
    expect(task1.query(By.css('span.date')).nativeElement.textContent).toBe('01/01/2018');

    expect(task2.query(By.css('.card-title')).nativeElement.textContent).toBe('Task 2');
    expect(task2.query(By.css('.card-subtitle')).nativeElement.textContent).toBe('Description task 2');
    expect(task2.query(By.css('span.date')).nativeElement.textContent).toBe('01/02/2018');

    expect(task3.query(By.css('.card-title')).nativeElement.textContent).toBe('Task 3');
    expect(task3.query(By.css('.card-subtitle')).nativeElement.textContent).toBe('Description task 3');
    expect(task3.query(By.css('span.date')).nativeElement.textContent).toBe('01/03/2018');
  });
});
