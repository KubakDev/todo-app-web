import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  constructor(private taskService: TodoService) {}
  complete() {
    // this.taskService.tasks[this.index].isCompleted =
    //   !this.taskService.tasks[this.index].isCompleted;
  }
  editTask() {
    this.editEvent.emit(this.task);
  }
}
