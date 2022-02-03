
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { Todo } from 'src/app/backend/models';
import { TodosService } from 'src/app/backend/services';

import { TaskComponent } from './task.component';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let mockTodosService: jasmine.SpyObj<TodosService>;
  let todos: Todo = {
    date: '',
    id: '',
    isComplete: false,
    note: '',
    title: 'string',
    userId: '',

  }
  beforeEach(async () => {
    const spy = jasmine.createSpyObj('TodosService', ['todosIdPut']);

    await TestBed.configureTestingModule({
      declarations: [TaskComponent],
      providers: [
        {
          provide: TodosService, useValue: spy
        }
      ]
    })
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Event Emitter called', () => {
    spyOn(component.editEvent, 'emit');
    component.editTask();
    expect(component.editEvent.emit).toHaveBeenCalled();
  })

});
