import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalAuthService } from './auth.service';
import { SideNavComponent } from './components/side-nav/side-nav.component';
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
      declarations: [AppComponent, SideNavComponent],
      providers: [
        { provide: GlobalAuthService, useValue: spy },
        { provide: ThemesService, useValue: MockThemeService },
      ],
      imports: [AppRoutingModule]
    });

    authServiceSpy = TestBed.inject(
      GlobalAuthService
    ) as jasmine.SpyObj<GlobalAuthService>;
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should render side-nav', () => {
    authServiceSpy.isAuthenticated.and.returnValue(of(true));



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
