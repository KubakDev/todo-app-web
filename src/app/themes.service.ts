import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ThemeName } from './models/theme.model';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  private themeName = new BehaviorSubject<ThemeName>('main-theme');

  themeName$ = this.themeName.asObservable();
  constructor() {}

  changeTheme(theme: ThemeName): void {
    this.themeName.next(theme);
  }
}
