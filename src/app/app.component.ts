import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemesService } from './themes.service';
import '@themesberg/flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private themeservice: ThemesService) {}
  title = 'todoAppWeb';

  weatherItems: any = [];

  get currentTheme(): Observable<string> {
    return this.themeservice.themeName$;
  }
}
