import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { GlobalAuthService } from 'src/app/auth.service';

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
      this.auth.logout();
      this.router.navigate(['/sign-in']);
    } catch (error) { }
  }

  onOpenNav() {
    this.isOpen = !this.isOpen;
  }
}
