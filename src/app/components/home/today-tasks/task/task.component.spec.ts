
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodosService } from 'src/app/backend/services';

import { TaskComponent } from './task.component';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let mockTodosService: jasmine.SpyObj<TodosService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('TodosService', ['todosIdPut']);


    TestBed.configureTestingModule({
      declarations: [TaskComponent],
      imports: [
        CommonModule,
      ],
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
