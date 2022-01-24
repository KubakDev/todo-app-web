import { Component, Input } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Todo } from 'src/app/backend/models';
import { TodosService } from 'src/app/backend/services';
import { TodoService } from 'src/app/todo.service';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent {
  @Input() index = 0;
  @Input() set editTask(task: Todo | undefined | null) {
    this.title = task?.title ?? '';
    this.notes = task?.note ?? '';
    this.date = task?.date;
    this._editTask = task;
    if (task?.title) {
      this.editMode = true;
      this.onClickInput();
    } else this.editMode = false;

  }
  editMode: boolean = false;
  startAdding: boolean = false;
  title: undefined | string = '';
  notes: undefined | string = '';
  date: undefined | string = '';
  time: undefined | string = '';

  private _editTask: Todo | undefined | null;
  constructor(
    private todosService: TodosService,
    private taskService: TodoService
  ) {}

  onClickInput() {
    this.startAdding = true;
  }
  async onSubmit() {
    if (!this.editMode) {
      const response = await firstValueFrom(
        this.todosService.todosPost({
          body: {
            date: this.date,
            note: this.notes,
            title: this.title,
            isComplete: false,
          },
        })
      );
      this.taskService.setTask(undefined);
    } else {
      if (!this._editTask?.id) return;
      const response = await firstValueFrom(
        this.todosService.todosIdPut({
          id: this._editTask.id,
          body: {
            date: this.date,
            isComplete: this._editTask.isComplete,
            note: this.notes,
            title: this.title,
          },
        })
      );
      this.taskService.setTask(undefined);
    }
    this.date = '';
    this.title = '';
    this.time = '';
    this.notes = '';
  }
  onClick() {
    this.date = '';
    this.title = '';
    this.time = '';
    this.notes = '';
    this.startAdding = false;
  }
}
