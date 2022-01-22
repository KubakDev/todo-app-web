import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { TodosService } from 'src/app/backend/services';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  completed: boolean = true;
  @Input() task: any;
  @Input() index: number = 0;
  @Output() editEvent = new EventEmitter<string>();
  constructor(private todoService: TodosService) {}
  async complete() {
    const response = await firstValueFrom(
      this.todoService.todosIdPut({
        id: this.task.id,
        body: {
          date: this.task.date,
          isComplete: !this.task.isComplete,
          isTimeAvailable: this.task.isTimeAvailable,
          note: this.task.note,
          title: this.task.title,
        },
      })
    );
  }
  editTask() {
    this.editEvent.emit(this.task);
  }
}
