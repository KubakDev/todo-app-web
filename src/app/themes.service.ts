import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ThemeName } from './models/theme.model';
@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  localTheme: ThemeName =
    (localStorage.getItem('themeName') as ThemeName) ?? 'main-theme';

  private themeName = new BehaviorSubject<ThemeName>('main-theme');

  themeName$ = this.themeName.asObservable();
  constructor() {
    this.themeName.next(this.localTheme);
  }

  changeTheme(theme: ThemeName): void {
    this.themeName.next(theme);
  }
}
