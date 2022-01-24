import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Subject } from 'rxjs';
import { Todo } from './backend/models';
import { TodosService } from './backend/services';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private tasks = new Subject<Todo | undefined>();
  AllTasks$ = this.tasks.asObservable();
  setTask(tasks: Todo | undefined) {
    this.tasks.next(tasks);
  }
  constructor() {}
}
