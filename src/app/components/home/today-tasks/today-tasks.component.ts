import { formatDate } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { Todo } from 'src/app/backend/models';
import { TodosService } from 'src/app/backend/services';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-today-tasks',
  templateUrl: './today-tasks.component.html',
  styleUrls: ['./today-tasks.component.scss'],
})
export class TodayTasksComponent implements OnChanges {
  isLoading: boolean = false;
  tasks: Todo[] | undefined;
  isOpen: boolean = false;
  currentDate: Date | undefined = new Date();
  isCompleteCondition: boolean | undefined;
  CheckTask: boolean = false;
  @Output() selectedTask = new EventEmitter<any>();
  @Input() date: Date = new Date();
  constructor(
    private todoService: TodosService,
    private taskService: TodoService
  ) {
    this.taskService.AllTasks$.subscribe((data) => {
      this.getData(this.isCompleteCondition);
    });
  }

  openFilter() {
    this.isOpen = !this.isOpen;
  }
  both() {
    this.getData(this.isCompleteCondition);
    this.isOpen = false;
  }
  filtter(condition: boolean) {
    this.getData(condition);
    this.isOpen = false;
  }
  addEdit(task: any) {
    this.selectedTask.emit({ task });
  }
  ngOnChanges(): void {
    this.getData(this.isCompleteCondition);
  }
  getData(isComplete: boolean | undefined) {
    this.isLoading = true;
    let date = new Date();
    if (this.date) {
      date = this.date;
    }

    if (this.isLoading) {
      this.tasks = [];
    }
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const fromDate = new Date(`${year}-${month + 1}-${day}`);
    const toDate = new Date(`${year}-${month + 1}-${day}`);
    this.todoService
      .todosGet({
        From: fromDate.toJSON(),
        To: toDate.toJSON(),
        IsComplete: isComplete,
      })
      .subscribe((data) => {
        this.tasks = data;
        if (data.length === 0) {
          this.CheckTask = true;
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.CheckTask = false;
        }
      });
  }
}
