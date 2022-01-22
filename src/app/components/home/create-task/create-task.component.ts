import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { TodosService } from 'src/app/backend/services';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnChanges {
  @Input() index = 0;
  @Input() editTask = {
    title: '',
    isComplete: false,
    note: '',
    date: '',
    time: '',
    id: '',
    isTimeAvailable: false,
    userId: '',
  };
  startAdding: boolean = false;
  task: string = '';
  notes: string = '';
  date: string = '';
  time: string = '';
  constructor(private todosService: TodosService) {}

  onClickInput() {
    this.startAdding = true;
  }
  async onSubmit() {
    if (!this.editTask.title) {
      const response = await firstValueFrom(
        this.todosService.todosPost({
          body: {
            date: this.date,
            isTimeAvailable: false,
            note: this.notes,
            title: this.task,
            isComplete: false,
          },
        })
      );
    }
    if (this.editTask.title) {
      const response = await firstValueFrom(
        this.todosService.todosIdPut({
          id: this.editTask.id,
          body: {
            date: this.date,
            isComplete: this.editTask.isComplete,
            isTimeAvailable: this.editTask.isTimeAvailable,
            note: this.notes,
            title: this.task,
          },
        })
      );
    }
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
    this.task = '';
  }
  ngOnChanges(): void {
    if (this.editTask.title) {
      this.task = this.editTask.title;
      this.notes = this.editTask.note;
      this.date = this.editTask.date;
      this.time = this.editTask.time;
    }
  }
}
