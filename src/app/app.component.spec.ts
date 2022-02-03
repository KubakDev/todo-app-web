import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '@auth0/auth0-angular';
import { Auth0Client } from '@auth0/auth0-spa-js';
import { BehaviorSubject, Observable, ReplaySubject, of } from 'rxjs';
import { AppComponent } from './app.component';
import { GlobalAuthService } from './auth.service';
import { TodosService } from './backend/services';
import { ThemeName } from './models/theme.model';
import { ThemesService } from './themes.service';

class MockThemeService extends ThemesService {
  theme = 'main-theme';

  getTheme() {
    return this.theme;
  }
}

let authServiceSpy: jasmine.SpyObj<GlobalAuthService>;
let themeService: MockThemeService;

describe('App Component', () => {
  let fixture: ComponentFixture<AppComponent>;
  themeService = new MockThemeService();

  beforeEach(() => {
    const spy = jasmine.createSpyObj('MyAuthService', ['isAuthenticated']);
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: GlobalAuthService, useValue: spy },
        { provide: ThemesService, useValue: MockThemeService },
      ],
    });

    authServiceSpy = TestBed.inject(
      GlobalAuthService
    ) as jasmine.SpyObj<GlobalAuthService>;
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should render side-nav', () => {
    authServiceSpy.isAuthenticated.and.returnValue(of(true));

    // spyOnProperty(authServiceSpy, 'isAuthenticated$').and.returnValue(of(true));
    // mockService.delete.and.returnValue(of({id: 1}));

    fixture.detectChanges();
    const sideNav = fixture.debugElement.query(
      By.css('app-side-nav')
    ).nativeElement;
    expect(sideNav).toBeDefined();
  });

  it('should get theme name', () => {
    expect(themeService.getTheme()).toBeTruthy();
  });
});
