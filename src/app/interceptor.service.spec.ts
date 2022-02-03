import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { GlobalAuthService } from './auth.service';
import { InterceptorService } from './interceptor.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';

let authServiceSpy: jasmine.SpyObj<GlobalAuthService>;

describe('Interceptor Service', () => {
  let httpMock: HttpTestingController;
  let http: HttpClient;
  const Api = 'https://jsonplaceholder.typicode.com/todos/1';
  beforeEach(() => {
    const authSpy = jasmine.createSpyObj('GlobalAuthService', [
      'getAccessTokenSilently',
    ]);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: GlobalAuthService, useValue: authSpy },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorService,
          multi: true,
        },
      ],
    });

    authServiceSpy = TestBed.inject(
      GlobalAuthService
    ) as jasmine.SpyObj<GlobalAuthService>;
    httpMock = TestBed.inject(HttpTestingController);
    http = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add Authorization Header', () => {
    http.get(Api).subscribe((res) => {
      expect(res).toBeTruthy();
    });
    const httpReq = httpMock.expectOne({ method: 'GET', url: Api });
    const tok = 'hhhh';
    authServiceSpy.getAccessTokenSilently.and.returnValue(of(tok));

    const tokenReq = httpReq.request.clone({
      setHeaders: { Authorization: `Bearer ${tok}` },
    });
    expect(tokenReq.headers.get('Authorization')).toBeTruthy();
  });
});
