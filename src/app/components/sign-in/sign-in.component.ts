import { Component, Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { TodosService } from 'src/app/backend/services';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
@Injectable()
export class SignInComponent {
  constructor(private auth: AuthService, private todos: TodosService) {}

  onAuth() {
    this.auth.login();
    // if (this.auth.loggedIn) this.todos.apiTodosGet$Json().toPromise();
  }

  logout(): void {
    this.auth.logout();
  }
}
