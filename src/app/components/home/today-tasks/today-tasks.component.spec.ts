import { ComponentFixture, TestBed } from '@angular/core/testing';
import { map, Observable } from 'rxjs';
import { Todo } from 'src/app/backend/models';
import { TodosService } from 'src/app/backend/services';
import { StrictHttpResponse } from 'src/app/backend/strict-http-response';
import { TodoService } from 'src/app/todo.service';

import { TodayTasksComponent } from './today-tasks.component';

describe('TodayTasksComponent', () => {
  let component: TodayTasksComponent;
  let fixture: ComponentFixture<TodayTasksComponent>;
  class MockTodoService extends TodosService {

  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodayTasksComponent],
      providers: [TodoService, {
        provide: TodosService, useValue: MockTodoService
      }]
    })
    fixture = TestBed.createComponent(TodayTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
  it('get all data', () => {
  })
});
