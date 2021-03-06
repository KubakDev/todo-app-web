import { formatDate } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { firstValueFrom } from 'rxjs';
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
  errorOccur: boolean = false;
  isOpen: boolean = false;
  currentDate: Date = new Date();
  isCompleteCondition: boolean | undefined;
  activeButton: number = 0;
  taskInfo: string = "today's Tasks";
  @Output() selectedTask = new EventEmitter<any>();
  @Input() date: Date | undefined = new Date();
  @Input() secoundClick: boolean = false;
  constructor(
    private todoService: TodosService,
    private taskService: TodoService
  ) {
    this.taskService.AllTasks$.subscribe((todo) => {
      const index = this.tasks?.findIndex((i) => i.id === todo!.id);

      if (index !== undefined && index > -1 && this.tasks) {

        this.tasks[index] = Object.assign(this.tasks[index], todo);

      }
      if (this.tasks && this.tasks.length !== 0) {


        if (this.tasks[this.tasks?.length - 1].date === todo?.date) {

          if (todo) this.tasks?.push(todo);
        }

      }
      if (this.tasks?.length === 0 && formatDate(this.currentDate, 'dd/MM/YYY', 'en') === formatDate(todo?.date + '', 'dd/MM/YYY', 'en')) {
        if (todo) this.tasks?.push(todo);

      }

    });
  }

  openFilter() {
    this.isOpen = !this.isOpen;
  }
  both() {
    this.getData(this.isCompleteCondition);
    this.isOpen = false;
    this.activeButton = 0;
  }
  filtter(condition: boolean) {
    if (condition === false) {
      this.activeButton = 1;
    }
    if (condition === true) {
      this.activeButton = 2;
    }

    this.getData(condition);
    this.isOpen = false;
  }
  addEdit(task: Todo | undefined) {
    this.selectedTask.emit(task);
  }
  ngOnChanges(): void {
    this.activeButton = 0;
    this.getData(this.isCompleteCondition);
  }
  async getData(isComplete?: boolean): Promise<void> {
    this.isLoading = true;
    if (this.isLoading) {
      this.tasks = [];
    }
    if (this.secoundClick === true) {
      this.isLoading = true;
      this.taskInfo = 'All Tasks';

      try {
        const response = await firstValueFrom(this.todoService
          .todosGet({
            IsComplete: isComplete,
          }));
        this.tasks = response;

        this.isLoading = false;
        this.errorOccur = false;



      } catch (error) {

        this.isLoading = false;
        this.errorOccur = true;
      }

    } else {
      if (this.date) {
        this.currentDate = this.date;
        if (
          formatDate(this.currentDate + '', 'dd/MM/YYY', 'en') ==
          formatDate(new Date(), 'dd/MM/YYY', 'en')
        ) {
          this.taskInfo = "Today's Tasks";
        } else {
          this.taskInfo = formatDate(this.date, 'dd/MM/YYY', 'en') + ' Tasks';
        }
      }

      const year = this.currentDate.getFullYear();
      const month = this.currentDate.getMonth();
      const day = this.currentDate.getDate();
      const fromDate = new Date(`${year}-${month + 1}-${day}`);
      const toDate = new Date(`${year}-${month + 1}-${day + 1} `);

      try {
        const response = await firstValueFrom(this.todoService
          .todosGet({
            From: fromDate.toJSON(),
            To: toDate.toJSON(),
            IsComplete: isComplete,
          }));
        this.tasks = response;

        this.isLoading = false;
        this.errorOccur = false;


      } catch (error) {

        this.isLoading = false;
        this.errorOccur = true;
      }

    }
  }
}
