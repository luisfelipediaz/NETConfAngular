import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';
import { State } from '../state.enum';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TaskComponent]
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

  it('debe estar renderizado el boton de eliminar y mover hacia la derecha cuando el estado es TODO', () => {
    component.task.state = State.TODO;
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const [btnDelete, btnNext] = buttons;

    expect(buttons.length).toBe(2);
    expect(btnDelete.nativeElement.textContent).toBe('X');
    expect(btnNext.nativeElement.textContent).toBe('>');
  });

  it('debe estar renderizado el boton de eliminar, mover hacia la derecha e izquierda cuando el estado es WIP', () => {
    component.task.state = State.WIP;
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const [btnPrev, btnDelete, btnNext] = buttons;

    expect(buttons.length).toBe(3);
    expect(btnDelete.nativeElement.textContent).toBe('X');
    expect(btnNext.nativeElement.textContent).toBe('>');
    expect(btnPrev.nativeElement.textContent).toBe('<');
  });

  it('debe estar renderizado el boton de eliminar y mover hacia la izquierda cuando el estado es DONE', () => {
    component.task.state = State.DONE;
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const [btnPrev, btnDelete] = buttons;

    expect(buttons.length).toBe(2);
    expect(btnPrev.nativeElement.textContent).toBe('<');
    expect(btnDelete.nativeElement.textContent).toBe('X');
  });
});
