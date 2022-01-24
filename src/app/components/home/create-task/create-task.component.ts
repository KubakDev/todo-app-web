
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
  constructor(private todoservice: TodoService, private toastr: ToastrService) {
    this.todoservice.allTasks$.subscribe((data) => {
      this.tasks = data;
    });
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
  startAdding: boolean = false;

  private _editTask: Todo | undefined | null;
  constructor(
    private todosService: TodosService,
    private taskService: TodoService
  ) {}

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

      this.toastr.success('Todo Added Successfully');
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
      this.toastr.success('Todo Edited Successfully');

      this.date = '';
      this.task = '';
      this.time = '';
      this.notes = '';
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
