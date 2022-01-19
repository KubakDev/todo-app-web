import { HttpClient } from '@angular/common/http';
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
  constructor(
    private http: HttpClient,
    private themeservice: ThemesService
  ) {}
  title = 'todoAppWeb';

  weatherItems: any = [];
  get currentTheme(): Observable<string> {
    return this.themeservice.themeName$;
  }

  ngOnInit() {
    this.http
      .get('http://localhost:5000/WeatherForecast')
      .subscribe((reply) => {
        this.weatherItems = reply;
      });
  }
  onclick() {}
}
