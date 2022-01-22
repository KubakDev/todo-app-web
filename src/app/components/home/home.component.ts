import { Component, OnInit } from '@angular/core';
import { ThemesService } from 'src/app/themes.service';
import { TodoService } from 'src/app/todo.service';

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

  constructor(private taskservice: TodoService) {}
  onTaskSelected(task: any) {
    this.task = task.task;
  }
}
