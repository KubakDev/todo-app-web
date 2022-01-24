import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { firstValueFrom } from 'rxjs';
import { Todo } from 'src/app/backend/models';
import { TodosService } from 'src/app/backend/services';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  editMode?: boolean = false;

  prevTodos: Todo[] = [];


  user:
    | {
        email: string;
        name: string;
        nickname: string;
        picture: string;
      }
    | undefined;
  constructor(
    private authService: AuthService,
    private todoService: TodosService
  ) {}

  async ngOnInit(): Promise<void> {
    this.authService.user$.subscribe((u) => {
      this.user = {
        email: u?.email ?? '',
        name: u?.name ?? '',
        nickname: u?.nickname ?? '',
        picture: u?.picture ?? '',
      };
    });


    this.prevTodos = await firstValueFrom(this.todoService.todosGet());

  }

  onEdit() {
    this.editMode = !this.editMode;
  }
}
