import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  isLoading: boolean | undefined = false;

  @Input() set editTask(task: Todo | undefined | null) {


    if (task) this.taskForm.patchValue(task);

    this._editTask = task;

    if (task) {
      this.editMode = true;
      this.onClickInput();

    } else this.editMode = false;

  }

  editMode: boolean = false;
  startAdding: boolean = false;

  private _submitted = false;
  private _editTask: Todo | undefined | null;

  get submitted(): boolean {
    return this._submitted;
  }

  constructor(
    private todosService: TodosService,
    private taskService: TodoService
  ) {


  }

  taskForm = new FormGroup({
    title: new FormControl('', Validators.required),
    note: new FormControl(''),
    date: new FormControl('', Validators.required),
  });

  onClickInput() {
    this.startAdding = true;
  }

  async onSubmit() {
    this._submitted = true;

    if (this.taskForm.invalid) return;
    try {
      if (!this.editMode) {
        this.isLoading = true;
        const response = await firstValueFrom(
          this.todosService.todosPost({
            body: {
              date: new Date(this.taskForm?.value.date).toJSON(),
              note: this.taskForm?.value.notes,
              title: this.taskForm?.value.title,
              isComplete: false,
            },
          })
        );
        this.taskService.setTask(response);
      } else {
        if (!this._editTask?.id) return;
        this.isLoading = true;
        const response = await firstValueFrom(
          this.todosService.todosIdPut({
            id: this._editTask.id,
            body: {
              date: new Date(this.taskForm?.value.date).toJSON(),
              isComplete: this._editTask.isComplete,
              note: this.taskForm?.value.note,
              title: this.taskForm?.value.title,
            },
          })
        );
        this.editMode = false;
        this.startAdding = false;

        this.taskService.setTask(response);
      }

    } catch (error) { }

    this._submitted = false;
    this.taskForm?.reset();
    this.isLoading = false;
  }
  onCancel() {
    this.editMode = false;
    this.taskForm?.reset();
    this.startAdding = false;
  }
}
