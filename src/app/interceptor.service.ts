import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { GlobalAuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private auth: GlobalAuthService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      req.url.startsWith('/assets/') ||
      req.url.startsWith('https://jsonplaceholder.typicode.com')
    ) {
      return next.handle(req);
    }
    return this.auth.getAccessTokenSilently().pipe(
      mergeMap((token) => {
        const tokenReq = req.clone({
          setHeaders: { Authorization: `Bearer ${token}` },
        });
        return next.handle(tokenReq);
      }),
      catchError((): ObservableInput<any> => {
        const err = new Error('error')
        return throwError(() => err)
      })
    );
  }
}
