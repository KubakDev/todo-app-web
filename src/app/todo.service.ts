import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  tasks = [
    {
      name: 'todays Task',
      isCompleted: false,
    },
    {
      name: 'todays Task',
      isCompleted: true,
    },
    {
      name: 'todays Task',
      isCompleted: false,
    },
  ];
  constructor() {}
}
