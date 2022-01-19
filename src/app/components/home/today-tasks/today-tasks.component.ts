import { formatDate } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { filter, Observable } from 'rxjs';
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

  constructor(private taskService: TodoService) {}
  get getTasks(): Observable<Array<any>> {
    return this.taskService.AllTasks$;
  }

  ngOnInit(): void {
    this.getTasks.subscribe((data) => {
      this.tasks = data;
    });
    console.log(this.tasks);
  }
  openFilter() {
    this.isOpen = !this.isOpen;
  }
  both() {
    this.getTasks.subscribe((data) => {
      this.tasks = data;
    });
    this.isOpen = false;
  }
  filtter(condition: boolean) {
    this.getTasks.subscribe((data) => {
      this.tasks = data;
    });
    this.tasks = this.tasks.filter((t) => {
      return (
        t.isCompleted === condition &&
        t.date === formatDate(new Date(), 'yyyy/MM/dd', 'en')
      );
    });

    this.isOpen = false;
  }
  addEdit(task: any) {
    console.log(task);
    this.selectedTask.emit({ task: task, index: task.id });
  }
}
