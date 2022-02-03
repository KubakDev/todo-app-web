import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { map, Observable, of } from 'rxjs';
import { Todo } from 'src/app/backend/models';
import { TodosService } from 'src/app/backend/services';
import { StrictHttpResponse } from 'src/app/backend/strict-http-response';
import { TodoService } from 'src/app/todo.service';

import { TodayTasksComponent } from './today-tasks.component';

describe('TodayTasksComponent', () => {
  let component: TodayTasksComponent;
  let fixture: ComponentFixture<TodayTasksComponent>;
  let MockTodoService: jasmine.SpyObj<TodosService>;
  let todos: Todo[] = [{
    date: '',
    id: '',
    isComplete: false,
    note: '',
    title: 'string',
    userId: '',

  }]

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('TodosService', ['todosGet']);

    await TestBed.configureTestingModule({
      declarations: [TodayTasksComponent],
      providers: [TodoService, {
        provide: TodosService, useValue: spy
      }]
    })
    MockTodoService = TestBed.inject(
      TodosService
    ) as jasmine.SpyObj<TodosService>;

    fixture = TestBed.createComponent(TodayTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    MockTodoService.todosGet.and.callFake((params) => {
      if (params?.IsComplete !== undefined)
        return of(todos.filter(i => (i.isComplete === params?.IsComplete)));
      return of(todos);
    })

  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('open filter', () => {
    component.isOpen = false;
    component.openFilter();
    expect(component.isOpen).toBeTrue();
  })
  it('close filter', () => {
    component.isOpen = true;
    component.openFilter();
    expect(component.isOpen).toBeFalse();
  })
  it('get all data', fakeAsync(async () => {
    await component.getData();
    expect(component.tasks).toEqual(todos);
  }))
  it('filter work correct', fakeAsync(async () => {

    await component.getData(false);
    expect(component.tasks !== undefined ? component.tasks[0].isComplete : "").toBe(false);
  }))
  it('change title on secound click', () => {
    component.secoundClick = true;
    component.getData()
    expect(component.taskInfo).toContain("All Tasks")
  })


});