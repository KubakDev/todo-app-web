import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInSvgComponent } from './sign-in-svg.component';

describe('SignInSvgComponent', () => {
  let component: SignInSvgComponent;
  let fixture: ComponentFixture<SignInSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
