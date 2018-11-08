import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskComponent } from './new-task.component';
import { By } from '@angular/platform-browser';
import { FormBuilder } from '@angular/forms';

describe('NewTaskComponent', () => {
  let component: NewTaskComponent;
  let fixture: ComponentFixture<NewTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewTaskComponent],
      providers: [FormBuilder]
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
});
