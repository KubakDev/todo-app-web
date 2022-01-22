import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodosService } from 'src/app/backend/services';

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

  ngOnInit() {
    this.todoService
      .todosGet({ From: new Date().toJSON() })
      .subscribe((data) => {
        this.tasks = data;
        console.log(this.tasks);
      });
  }
  openFilter() {
    this.isOpen = !this.isOpen;
  }
  both() {
    this.todoService
      .todosGet({ From: new Date().toJSON() })
      .subscribe((data) => {
        this.tasks = data;
      });
    this.isOpen = false;
  }
  filtter(condition: boolean) {
    this.todoService
      .todosGet({ IsComplete: condition, From: new Date().toJSON() })
      .subscribe((data) => {
        this.tasks = data;
      });

    this.isOpen = false;
  }
  addEdit(task: any) {
    this.selectedTask.emit({ task: task });
  }
}
