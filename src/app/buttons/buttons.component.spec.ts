import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsComponent } from './buttons.component';
import { State } from '../state.enum';
import { By } from '@angular/platform-browser';

describe('ButtonsComponent', () => {
  let component: ButtonsComponent;
  let fixture: ComponentFixture<ButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe estar renderizado el boton de eliminar y mover hacia la derecha cuando el estado es TODO', () => {
    component.state = State.TODO;
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const [btnDelete, btnNext] = buttons;

    expect(buttons.length).toBe(2);
    expect(btnDelete.nativeElement.textContent).toBe('X');
    expect(btnNext.nativeElement.textContent).toBe('>');
  });

  it('debe estar renderizado el boton de eliminar, mover hacia la derecha e izquierda cuando el estado es WIP', () => {
    component.state = State.WIP;
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const [btnPrev, btnDelete, btnNext] = buttons;

    expect(buttons.length).toBe(3);
    expect(btnDelete.nativeElement.textContent).toBe('X');
    expect(btnNext.nativeElement.textContent).toBe('>');
    expect(btnPrev.nativeElement.textContent).toBe('<');
  });

  it('debe estar renderizado el boton de eliminar y mover hacia la izquierda cuando el estado es DONE', () => {
    component.state = State.DONE;
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const [btnPrev, btnDelete] = buttons;

    expect(buttons.length).toBe(2);
    expect(btnPrev.nativeElement.textContent).toBe('<');
    expect(btnDelete.nativeElement.textContent).toBe('X');
  });
});
