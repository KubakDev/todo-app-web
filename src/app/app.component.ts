import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public auth: AuthService, private http: HttpClient) {}
  title = 'todoAppWeb';
  _currentTheme: 'theme-light' | 'theme-dark' = 'theme-light';
  weatherItems: any = [];
  get currentTheme(): string {
    return this._currentTheme;
  }
  ngOnInit() {
    this.http
      .get('http://localhost:5000/WeatherForecast')
      .subscribe((reply) => {
        this.weatherItems = reply;
      });
  }
  onclick() {
    this._currentTheme = 'theme-dark';
  }
}
