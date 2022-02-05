import { Injectable } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalAuthService extends AuthService {
  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticated$;
  }
  user(): Observable<import("@auth0/auth0-spa-js").User | null | undefined> {
    return this.user$
  }

  getUser(): Observable<User | null | undefined> {

    return this.user$;
  }
}
