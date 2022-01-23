import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public Tasks = new BehaviorSubject<Array<any>>([]);
  allTasks$ = this.Tasks.asObservable();
  constructor() {}
}
