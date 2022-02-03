import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemesService } from './themes.service';
import { AuthService } from '@auth0/auth0-angular';
import '@themesberg/flowbite';
import { GlobalAuthService } from './auth.service';
import '../../string-extension';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  get user(): Observable<boolean> {
    return this.auth.isAuthenticated();
  }
  constructor(
    private themeservice: ThemesService,
    private auth: GlobalAuthService
  ) {}
  title = 'Todo App';

  get currentTheme(): Observable<string> {
    return this.themeservice.themeName$;
  }
}
