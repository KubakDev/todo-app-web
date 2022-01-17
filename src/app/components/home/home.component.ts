import { Component, OnInit } from '@angular/core';
import { ThemesService } from 'src/app/themes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public themeService: ThemesService) {}
}
