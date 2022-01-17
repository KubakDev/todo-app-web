import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent {
  startAdding: boolean = false;
  task: string = '';
  notes: string = '';
  date: string = '';
  time: string = '';
  constructor(private todoservice: TodoService) {}

  onClickInput() {
    this.startAdding = true;
  }
  onSubmit() {
    this.todoservice.tasks.push({
      name: this.task,
      isCompleted: false,
      notes: this.notes,
      date: this.date,
      time: this.time,
    });
    this.date = '';
    this.task = '';
    this.time = '';
    this.notes = '';
  }
  onClick() {
    this.date = '';
    this.task = '';
    this.time = '';
    this.notes = '';
    this.startAdding = false;
  }
}
