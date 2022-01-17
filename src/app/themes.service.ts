import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ThemeName } from './models/theme.model';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  localTheme = localStorage.getItem('themeName');

  private themeName = new BehaviorSubject<any>('main-theme');

  themeName$ = this.themeName.asObservable();
  constructor() {
    if (this.localTheme !== '') {
      this.themeName.next(this.localTheme);
    }
  }

  changeTheme(theme: ThemeName): void {
    this.themeName.next(theme);
  }
}
