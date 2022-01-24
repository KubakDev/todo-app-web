import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  task = {
    title: '',
    isComplete: false,
    note: '',
    date: '',
    time: '',
    id: '',
    isTimeAvailable: false,
    userId: '',
  };
  index = 0;
  date: any;
  userName: string | undefined;
  constructor() {}
  onTaskSelected(task: any) {
    this.task = task.task;
  }
  getMontheTasks(day: any) {
    this.date = day.day;
  }
}
