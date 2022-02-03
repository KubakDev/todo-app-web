import { Injectable } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalAuthService extends AuthService {
  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticated$;
  }
  getUser(): Observable<User | null | undefined> {
    return this.user$;
  }
}
