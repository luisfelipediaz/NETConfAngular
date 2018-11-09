import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskButtonComponent } from './new-task-button.component';
import { Router } from '@angular/router';

describe('NewTaskButtonComponent', () => {
  let component: NewTaskButtonComponent;
  let fixture: ComponentFixture<NewTaskButtonComponent>;
  let routerMock: Router;

  beforeEach(async(() => {

    routerMock = jasmine.createSpyObj('Router', ['navigateByUrl']);

    TestBed.configureTestingModule({
      declarations: [NewTaskButtonComponent],
      providers: [
        { provide: Router, useValue: routerMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTaskButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
