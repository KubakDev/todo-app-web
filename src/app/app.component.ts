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

  weatherItems: any = [];

  ngOnInit() {
    this.http
      .get('http://localhost:5000/WeatherForecast')
      .subscribe((reply) => {
        this.weatherItems = reply;
      });
  }
}
