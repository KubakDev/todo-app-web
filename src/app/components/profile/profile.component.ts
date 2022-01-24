import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
export class ProfileComponent implements OnInit, OnDestroy {
  editMode?: boolean = false;
  todos?: [] | any;
  prevTodos?: string[] = [];
  subscription?: Observable<Todo[]> | Subscription;
  profileFrom?: FormGroup;

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
    this.todoService.apiTodosGet$Json;

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
    this.profileFrom = new FormGroup({
      name: new FormControl(this.user?.name, Validators.required),
      nickname: new FormControl(this.user?.nickname, Validators.required),
    });
  }

  onDeleteTodos() {
    this.prevTodos?.splice(0, this.prevTodos.length);
  }
}
