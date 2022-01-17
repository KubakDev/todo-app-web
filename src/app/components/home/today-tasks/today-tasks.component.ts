import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TodosService } from 'src/app/backend/services';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-today-tasks',
  templateUrl: './today-tasks.component.html',
  styleUrls: ['./today-tasks.component.scss'],
})
export class TodayTasksComponent implements OnInit {
  tasks: any = '';
  isOpen: boolean = false;
  constructor(private taskService: TodoService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.tasks;
  }
  openFilter() {
    this.isOpen = !this.isOpen;
  }
}
