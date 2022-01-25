import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Todo } from 'src/app/backend/models';
import { TodosService } from 'src/app/backend/services';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  completed: boolean = true;
  isLoading: boolean | undefined = false;
  @Input() task: Todo | undefined;
  @Input() index: number = 0;
  @Output() editEvent = new EventEmitter<Todo | undefined>();

  constructor(
    private todoService: TodosService,
    private taskService: TodoService
  ) {}
  async complete() {
    if (!this.task || !this.task.id) return;
    this.isLoading = true;
    const response = await firstValueFrom(
      this.todoService.todosIdPut({
        id: this.task.id,
        body: {
          date: this.task.date,
          isComplete: !this.task.isComplete,
          note: this.task.note,
          title: this.task.title,
        },
      })
    );
    if (response) {
      this.isLoading = false;
    }
    this.taskService.setTask(response);
  }

  editTask() {
    this.editEvent.emit(this.task);
  }
}
