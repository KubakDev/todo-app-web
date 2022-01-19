import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth0Client } from '@auth0/auth0-spa-js';
import { concatMap, from, Observable, Subject, takeUntil, tap } from 'rxjs';
import { TodosService } from 'src/app/backend/services';
import { AuthService } from '@auth0/auth0-angular';
import { ThemesService } from 'src/app/themes.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit, OnDestroy {
  private destroy = new Subject<undefined>();
  private loggedIn = new Subject();

  get currentTheme(): Observable<string> {
    return this.themeservice.themeName$;
  }
  
  constructor(
    private auth: AuthService,
    private todos: TodosService,
    private router: Router, 
    private themeservice: ThemesService
  ) {}
  
  ngOnDestroy(): void {
    this.destroy.next(undefined);
    this.destroy.complete();
  }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((user: any) => {
      if (user) this.router.navigate(['/profile']);
    });
  }

  async onAuth() {
    await this.auth.loginWithPopup();}

  



  logout(): void {
    this.auth.logout();
  }

  private async navigateToProfile(): Promise<void> {
    this.router.navigateByUrl('/profile');
  }
}
