import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeName } from 'src/app/models/theme.model';
import { ThemesService } from 'src/app/themes.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent {
  isOpen?: boolean = false;
  currentTheme: ThemeName = 'blue-theme';

  constructor(private themeService: ThemesService) {}

  onToggle() {
    this.isOpen = !this.isOpen;
  }
  changeTheme(themeName: ThemeName) {
    this.themeService.changeTheme(themeName);

    this.currentTheme =
      this.currentTheme === 'main-theme' ? 'blue-theme' : 'main-theme';
    this.isOpen = false;
  }
}
