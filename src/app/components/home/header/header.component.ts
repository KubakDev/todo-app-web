import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { firstValueFrom } from 'rxjs';
import { GlobalAuthService } from 'src/app/auth.service';
import { TodosService } from 'src/app/backend/services';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  userName: string | undefined;
  unfinishedTasks: number = 0;

  constructor(
    authService: GlobalAuthService,
    private todoService: TodosService,
    private tasks: TodoService
  ) {
    authService.user().subscribe((u) => {
      this.userName = u?.name;
    });

    this.updateUnfinishedTasks();

    this.tasks.AllTasks$.subscribe(async () => {
      this.updateUnfinishedTasks();
    });
  }

  private async updateUnfinishedTasks(): Promise<void> {
    this.unfinishedTasks = (
      await firstValueFrom(this.todoService.todosGet({ IsComplete: false }))
    ).length;
  }
}
