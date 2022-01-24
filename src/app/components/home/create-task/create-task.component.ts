import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
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
  @ViewChild('f') taskForm: NgForm | undefined;
  @Input() index = 0;
  startAdding: boolean = false;
  task: string = '';
  notes: string = '';
  date: string = '';
  time: string = '';
  tasks: any = [];
  defaultTitle: string | undefined;
  defaultDate: string | undefined;
  defaultNotes: string | undefined;

  @Input() set editTask(task: Todo | undefined | null) {
    this.defaultTitle = task?.title ?? '';
    this.defaultDate = task?.date ?? '';
    this.defaultNotes = task?.note ?? '';

    this._editTask = task;
    if (task?.title) {
      this.editMode = true;
      this.onClickInput();
    } else this.editMode = false;
  }
  editMode: boolean = false;

  private _editTask: Todo | undefined | null;
  constructor(
    private todosService: TodosService,
    private taskService: TodoService
  ) {}

  onClickInput() {
    this.startAdding = true;
  }
  async onSubmit() {
    console.log(this.taskForm?.value);
    if (!this.editMode) {
      const response = await firstValueFrom(
        this.todosService.todosPost({
          body: {
            date: this.taskForm?.value.date,
            note: this.taskForm?.value.notes,
            title: this.taskForm?.value.title,
            isComplete: false,
          },
        })
      );
      this.taskService.setTask(undefined);
    } else {
      console.log(this.taskForm?.value);
      if (!this._editTask?.id) return;
      const response = await firstValueFrom(
        this.todosService.todosIdPut({
          id: this._editTask.id,
          body: {
            date: this.taskForm?.value.date,
            isComplete: this._editTask.isComplete,
            note: this.taskForm?.value.note,
            title: this.taskForm?.value.title,
          },
        })
      );
      this.taskService.setTask(undefined);
    }
    this.taskForm?.reset();
  }
  onClick() {
    this.taskForm?.reset();
    this.startAdding = false;
  }
}
