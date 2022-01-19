import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ThemeName } from './models/theme.model';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  localTheme = localStorage.getItem('themeName')
    ? localStorage.getItem('themeName')
    : 'main-theme';

  private themeName = new BehaviorSubject<any>('main-theme');

  themeName$ = this.themeName.asObservable();
  constructor() {
    this.themeName.next(this.localTheme);
  }

  changeTheme(theme: ThemeName): void {
    this.themeName.next(theme);
  }
}
