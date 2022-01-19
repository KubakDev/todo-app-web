import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // tasks = [
  //   {
  //     id: 0,
  //     name: 'todays Task',
  //     isCompleted: false,
  //     notes: 'Some Notes',
  //     date: '2022/01/19',
  //     time: '7pm',
  //   },
  //   {
  //     id: 1,
  //     name: 'todays Task',
  //     isCompleted: true,
  //     notes: 'Some Notes',
  //     date: '2022/01/19',
  //     time: '7pm',
  //   },
  //   {
  //     id: 2,
  //     name: 'todays Task',
  //     isCompleted: false,
  //     notes: 'Some Notes',
  //     date: '2/4/2022',
  //     time: '7pm',
  //   },
  // ];
  public Tasks = new BehaviorSubject<Array<any>>([
    {
      id: 0,
      name: 'todays Task',
      isCompleted: false,
      notes: 'Some Notes',
      date: '2022/01/19',
      time: '7pm',
    },
    {
      id: 1,
      name: 'todays Task',
      isCompleted: true,
      notes: 'Some Notes',
      date: '2022/01/19',
      time: '7pm',
    },
    {
      id: 2,
      name: 'todays Task',
      isCompleted: false,
      notes: 'Some Notes',
      date: '2/4/2022',
      time: '7pm',
    },
  ]);
  AllTasks$ = this.Tasks.asObservable();
  constructor() {}
}
