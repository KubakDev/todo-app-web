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
  onTaskSelected(task: Todo) {
    if (task.id === this.task?.id) {
      this.task = Object.assign({}, this.task);
      return
    }
    this.task = task;
  }
  getMontheTasks(day: { day: Date; secoundClick: boolean }) {
    this.date = day.day;
    this.secoundClick = day.secoundClick;
  }
}
