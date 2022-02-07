import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from './backend/models';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  private tasks = new Subject<Todo | undefined>();
  AllTasks$ = this.tasks.asObservable();
  setTask(tasks: Todo | undefined) {
    this.tasks.next(tasks);
  }

}
