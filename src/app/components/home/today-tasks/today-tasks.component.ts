import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/backend/models';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-today-tasks',
  templateUrl: './today-tasks.component.html',
  styleUrls: ['./today-tasks.component.scss'],
})
export class TodayTasksComponent implements OnInit {
  tasks: Todo[] | undefined = undefined;
  isOpen: boolean = false;
  constructor(private taskService: TodoService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.tasks;
  }
  openFilter() {
    this.isOpen = !this.isOpen;
  }
}
