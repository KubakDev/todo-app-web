import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, Subscription } from 'rxjs';
import { Todo } from 'src/app/backend/models';
import { TodosService } from 'src/app/backend/services';

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

  ngOnDestroy(): void {
    if (!this.subscription) return;
  }

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
    if (this.prevTodos) {
      this.prevTodos = ['Check Mail', 'Coding', 'Have Dinner'];
    }

    this.todos = this.todoService
      .apiTodosGet$Json$Response()
      .subscribe((element: any) => {
        console.log(element);
      });
    // this.subscription = this.todoService
    //   .apiTodosGet$Json()
    //   .subscribe((todos: Todo[]) => {
    //     this.todos = todos;
    //     console.log('hey', todos);
    //   });
  }

  onSubmit() {
    if (!this.user) return;
    this.user.name = this.profileFrom?.value.name;
    this.user.nickname = this.profileFrom?.value.nickname;
    this.editMode = !this.editMode;
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
