import { formatDate } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { TodosService } from 'src/app/backend/services';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-today-tasks',
  templateUrl: './today-tasks.component.html',
  styleUrls: ['./today-tasks.component.scss'],
})
export class TodayTasksComponent implements OnInit {
  tasks: Array<any> = [];
  isOpen: boolean = false;

  @Output() selectedTask = new EventEmitter<any>();

  constructor(private todoService: TodosService) {}
  // get getTasks(): Observable<Array<any>> {
  //   return this.taskService.AllTasks$;
  // }

  ngOnInit(): void {
    this.todoService.todosGet().subscribe((data) => {
      this.tasks = data;
    });
  }
  openFilter() {
    this.isOpen = !this.isOpen;
  }
  both() {
    this.todoService.todosGet().subscribe((data) => {
      this.tasks = data;
    });
    this.isOpen = false;
  }
  filtter(condition: boolean) {
    this.tasks = this.tasks.filter((t) => {
      return t.isComplete === condition;
    });

    this.isOpen = false;
  }
  addEdit(task: any) {
    this.selectedTask.emit({ task: task, index: task.id });
  }
}
