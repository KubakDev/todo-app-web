import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { ThemesService } from 'src/app/themes.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit, OnDestroy {
  private destroy = new Subject<undefined>();

  get currentTheme(): Observable<string> {
    return this.themeService.themeName$;
  }

  constructor(
    private auth: AuthService,
    private themeService: ThemesService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.destroy.next(undefined);
    this.destroy.complete();
  }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((user: any) => {
      if (user) this.navigateToProfile();
    });
  }

  async onAuth() {
    await this.auth.loginWithRedirect({ audience: 'http://localhost:5000' });
  }

  private async navigateToProfile(): Promise<void> {
    await this.router.navigateByUrl('/profile');
  }
}
