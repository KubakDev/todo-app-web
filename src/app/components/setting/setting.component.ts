import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { ThemeName } from 'src/app/models/theme.model';
import { ThemesService } from 'src/app/themes.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  isOpen?: boolean = false;
  currentTheme: any = 'blue-theme';
  userName?: string;

  constructor(
    private themeService: ThemesService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    if (this.themeService.localTheme) {
      this.currentTheme = this.themeService.localTheme;
      this.currentTheme =
        this.currentTheme === 'main-theme' ? 'blue-theme' : 'main-theme';
    }
    this.authService.user$.subscribe((u) => {
      this.userName = u?.name;
    });
  }

  onToggle() {
    this.isOpen = !this.isOpen;
  }
  changeTheme(themeName: ThemeName) {
    localStorage.setItem('themeName', themeName);
    this.themeService.changeTheme(themeName);

    this.currentTheme =
      this.currentTheme === 'main-theme' ? 'blue-theme' : 'main-theme';

    this.isOpen = false;
  }
}
