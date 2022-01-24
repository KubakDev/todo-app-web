import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { TodosService } from 'src/app/backend/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  userName: string | undefined;
  unfinishedTasks: number = 0;

  constructor(authService: AuthService, todoService: TodosService) {
    authService.user$.subscribe((u) => {
      this.userName = u?.name;
    });
    todoService.todosGet({ IsComplete: false }).subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        this.unfinishedTasks++;
      }
    });
  }
}
