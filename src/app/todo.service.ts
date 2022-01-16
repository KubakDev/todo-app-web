import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  tasks = [
    {
      name: 'todays Task',
      isCompleted: false,
      notes: 'Some Notes',
      date: '2/4/2022',
      time: '7pm',
    },
    {
      name: 'todays Task',
      isCompleted: true,
      notes: 'Some Notes',
      date: '2/4/2022',
      time: '7pm',
    },
    {
      name: 'todays Task',
      isCompleted: false,
      notes: 'Some Notes',
      date: '2/4/2022',
      time: '7pm',
    },
  ];
  constructor() {}
}
