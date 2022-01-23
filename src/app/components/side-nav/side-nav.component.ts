import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  get loggedIn(): Observable<boolean> {
    return this.auth.isAuthenticated$;
  }
  constructor(private auth: AuthService) {}

  onLogout() {
    localStorage.clear();
    this.auth.logout();
  }
}
