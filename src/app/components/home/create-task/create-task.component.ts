import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnChanges {
  @Input() index = 0;
  @Input() editTask = {
    name: '',
    isCompleted: false,
    notes: '',
    date: '',
    time: '',
  };
  startAdding: boolean = false;
  task: string = '';
  notes: string = '';
  date: string = '';
  time: string = '';
  tasks: any = [];
  constructor(private todoservice: TodoService) {
    this.todoservice.AllTasks$.subscribe((data) => {
      this.tasks = data;
    });
  }

  onClickInput() {
    this.startAdding = true;
  }
  onSubmit() {
    if (!this.editTask.name) {
      this.todoservice.Tasks.next([
        ...this.tasks,
        {
          id: 4,
          name: this.task,
          isCompleted: false,
          notes: this.notes,
          date: this.date,
          time: this.time,
        },
      ]);
      console.log(this.todoservice.Tasks);
      this.date = '';
      this.task = '';
      this.time = '';
      this.notes = '';
    } else {
      this.tasks[this.index] = {
        id: 4,
        name: this.task,
        isCompleted: false,
        notes: this.notes,
        date: this.date,
        time: this.time,
      };
      this.todoservice.Tasks.next(this.tasks);
      this.editTask = {
        name: '',
        isCompleted: false,
        notes: '',
        date: '',
        time: '',
      };
      this.date = '';
      this.task = '';
      this.time = '';
      this.notes = '';
    }
  }
  onClick() {
    this.date = '';
    this.task = '';
    this.time = '';
    this.notes = '';
    this.startAdding = false;
    this.task = '';
  }
  ngOnChanges(): void {
    if (this.editTask.name) {
      this.task = this.editTask.name;
      this.notes = this.editTask.notes;
      this.date = this.editTask.date;
      this.time = this.editTask.time;
    }
  }
}
