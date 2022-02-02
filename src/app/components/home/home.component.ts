import { Component } from '@angular/core';
import { Todo } from 'src/app/backend/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  task: Todo | undefined;
  index = 0;
  date: Date | undefined;
  secoundClick: boolean = false;
  constructor() { }
  onTaskSelected(task: { task: Todo }) {
    this.task = task.task;
  }
  getMontheTasks(day: { day: Date; secoundClick: boolean }) {
    this.date = day.day;
    this.secoundClick = day.secoundClick;
  }
}
