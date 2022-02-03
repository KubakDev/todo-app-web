import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { User } from '@auth0/auth0-spa-js';
import { firstValueFrom, of } from 'rxjs';
import { GlobalAuthService } from 'src/app/auth.service';
import { Todo } from 'src/app/backend/models';
import { TodosService } from 'src/app/backend/services';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let authServiceSpy: jasmine.SpyObj<GlobalAuthService>;
  let todoServiceSpy: jasmine.SpyObj<TodosService>;

  beforeEach(() => {
    const authSpy = jasmine.createSpyObj('GlobalAuthService', [
      'isAuthenticated',
      'getUser',
    ]);
    const todoSpy = jasmine.createSpyObj('TodosService', ['todosGet']);

    TestBed.configureTestingModule({
      providers: [
        { provide: GlobalAuthService, useValue: authSpy },
        { provide: TodosService, useValue: todoSpy },
      ],
    });

    authServiceSpy = TestBed.inject(
      GlobalAuthService
    ) as jasmine.SpyObj<GlobalAuthService>;
    todoServiceSpy = TestBed.inject(
      TodosService
    ) as jasmine.SpyObj<TodosService>;

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authServiceSpy.getUser.and.returnValue(of({}));
  });

  it('should have user', async () => {
    let expectedUser: User = { name: 'Sher' };
    authServiceSpy.getUser.and.returnValue(of(expectedUser));
    component.ngOnInit();
    expect(component.user).toEqual(expectedUser);
  });

  it('should return array', async () => {
    let expectedTodo: Todo = {
      isComplete: true,
      title: 'Title',
    };
    todoServiceSpy.todosGet.and.returnValue(of([expectedTodo]));

    await component.ngOnInit();
    fixture.detectChanges();
    expect(component.prevTodos[0]).toEqual(expectedTodo);
    const span = fixture.debugElement.query(By.css('#todoSpan'));
    expect(span).toBeDefined();
  });
});
