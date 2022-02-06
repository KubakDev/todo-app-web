
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { SignInSvgComponent } from './sign-in-svg.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

describe('sign-in-svg', () => {
  let component: SignInSvgComponent;
  let fixture: ComponentFixture<SignInSvgComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInSvgComponent],
      imports: [HttpClientModule, CommonModule, BrowserModule],
    });
    fixture = TestBed.createComponent(SignInSvgComponent);
    fixture.detectChanges();
  });
  it('should be defined', () => {
    const svg = fixture.debugElement.nativeElement.querySelector('div');
    expect(svg).toBeDefined();
  });
});
