import { Component, OnInit } from '@angular/core';
import { ThemesService } from 'src/app/themes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  task = {
    name: '',
    isCompleted: false,
    notes: '',
    date: '',
    time: '',
  };
  index = 0;

  constructor() {}
  onTaskSelected(task: any) {
    this.task = task.task;
    this.index = task.index;
  }
}
