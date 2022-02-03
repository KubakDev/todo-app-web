import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { GlobalAuthService } from 'src/app/auth.service';
import { ThemesService } from 'src/app/themes.service';

import { SettingComponent } from './setting.component';


describe('SettingComponent', () => {

  let component: SettingComponent;
  let fixture: ComponentFixture<SettingComponent>;

  const serviceStub = {
    user: () => { return { subscribe: (e: string) => { component.userName = e } }; },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingComponent],
      providers: [
        { provide: GlobalAuthService, useValue: serviceStub },
        { provide: ThemesService },
      ],
    });

    fixture = TestBed.createComponent(SettingComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });
  it('userName initialized', () => {

    expect(component.userName).toBeTruthy();
  });
  it(' on toggle isOPen be true ', () => {
    component.isOpen = false;
    component.onToggle();
    expect(component.isOpen).toBe(true);

  })
  it(' on toggle isOPen be false ', () => {
    component.isOpen = true;
    component.onToggle();
    expect(component.isOpen).toBe(false);

  })

  it('themeChange to blue-theme', () => {
    component.currentTheme = 'main-theme';
    component.changeTheme('blue-theme');
    expect(component.currentTheme).toBe('blue-theme')
  })
  it('themeChange work to main-theme', () => {
    component.currentTheme = 'blue-theme';
    component.changeTheme('main-theme');
    expect(component.currentTheme).toBe('main-theme')
  })
});
