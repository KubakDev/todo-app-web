import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './backend/models';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public Tasks = new BehaviorSubject<Todo>({});
  AllTasks$ = this.Tasks.asObservable();
  constructor() {}
}
