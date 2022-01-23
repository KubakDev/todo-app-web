import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemesService } from './themes.service';
import '@themesberg/flowbite';
import { TodosService } from './backend/services';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private themeservice: ThemesService,
    private todoService: TodosService,
    private taskservice: TodoService
  ) {}
  title = 'todoAppWeb';

  weatherItems: any = [];

  get currentTheme(): Observable<string> {
    return this.themeservice.themeName$;
  }
}
