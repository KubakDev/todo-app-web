import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { SignInSvgComponent } from './sign-in-svg.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

describe('sign-in-svg', () => {
  let component: SignInSvgComponent;
  let fixture: ComponentFixture<SignInSvgComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, CommonModule, BrowserModule],
    });
    fixture = TestBed.createComponent(SignInSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should be defined', () => {
    const svg = fixture.debugElement.nativeElement.querySelector('div');
    expect(svg).toBeDefined();
  });
});
