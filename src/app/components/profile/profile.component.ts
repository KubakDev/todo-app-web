import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '@auth0/auth0-angular';

import { firstValueFrom } from 'rxjs';
import { GlobalAuthService } from 'src/app/auth.service';
import { Todo } from 'src/app/backend/models';
import { TodosService } from 'src/app/backend/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  editMode: boolean = false;
  todos: undefined | Todo[];
  profileFrom?: FormGroup;
  isLoading: boolean = false;
  isError: boolean = false;

  prevTodos: Todo[] = [];

  user: User | undefined;
  constructor(
    private authService: GlobalAuthService,
    private todoService: TodosService
  ) { }

  async ngOnInit(): Promise<void> {
    this.authService.getUser().subscribe((u) => {
      if (u) this.user = u;
    });
    this.isLoading = true;
    try {
      this.prevTodos = await firstValueFrom(this.todoService.todosGet());
      this.isLoading = false;
    } catch (error) {
      this.isError = true;
      this.isLoading = false;
    }
  }
}
