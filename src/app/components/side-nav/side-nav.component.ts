import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  isOpen?: boolean = false;
  get loggedIn(): Observable<boolean> {
    return this.auth.isAuthenticated$;
  }
  constructor(private auth: AuthService, private router: Router) {}

  onLogout() {
    try {
      this.auth.logout();
      this.router.navigate(['/sign-in']);
    } catch (error) {}
  }

  onOpenNav() {
    console.log(this.isOpen);
    this.isOpen = !this.isOpen;
  }
}
