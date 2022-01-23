import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemesService } from './themes.service';
import '@themesberg/flowbite';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  get user(): Observable<boolean> {
    return this.auth.isAuthenticated$;
  }
  constructor(private themeservice: ThemesService, private auth: AuthService) {}
  title = 'Todo App';

  get currentTheme(): Observable<string> {
    return this.themeservice.themeName$;
  }
}
