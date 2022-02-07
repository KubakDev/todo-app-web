import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { GlobalAuthService } from 'src/app/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
})
export class SideNavComponent {
  isOpen?: boolean = false;
  get loggedIn(): Observable<boolean> {
    return this.auth.isAuthenticated$;
  }
  constructor(private auth: GlobalAuthService, private router: Router) { }

  onLogout() {
    try {
      this.auth.logout({
        returnTo: environment.production ? 'todo.kubak.dev' : 'http://localhost:4201'
      });
    } catch (error) { }
  }

  onOpenNav() {
    this.isOpen = !this.isOpen;
  }
}
