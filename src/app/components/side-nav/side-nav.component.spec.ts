import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { GlobalAuthService } from '../../auth.service';

import { SideNavComponent } from './side-nav.component';

@Component({ selector: 'app-profile', template: '' })
class ProfileStubComponent {}

let authServiceSpy: jasmine.SpyObj<GlobalAuthService>;
let router: Router;
let comp: SideNavComponent;

describe('SideNavComponent', () => {
  let fixture: ComponentFixture<SideNavComponent>;
  beforeEach(() => {
    const authSpy = jasmine.createSpyObj('GlobalAuthService', [
      'isAuthenticated',
    ]);

    TestBed.configureTestingModule({
      declarations: [SideNavComponent, ProfileStubComponent],
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: 'profile',
            component: ProfileStubComponent,
          },
        ]),
      ],
      providers: [{ provide: GlobalAuthService, useValue: authSpy }],
    });

    authServiceSpy = TestBed.inject(
      GlobalAuthService
    ) as jasmine.SpyObj<GlobalAuthService>;

    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(SideNavComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should route to components', fakeAsync(() => {
    authServiceSpy.isAuthenticated.and.returnValue(of(true));
    router.navigateByUrl('profile');
    tick();
    expect(router.url).toEqual('/profile');
  }));

  it('should logout', () => {
    comp.onLogout();
    fixture.detectChanges();
    expect(authServiceSpy.isAuthenticated()).toBeFalsy();
  });

  it('should toggle true', () => {
    comp.onOpenNav();
    fixture.detectChanges();
    expect(comp.isOpen).toBeTruthy();
  });

  it('should be false initially', () => {
    expect(comp.isOpen).toBeFalsy();
  });
});
