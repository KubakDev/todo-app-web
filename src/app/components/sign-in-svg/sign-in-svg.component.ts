import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-sign-in-svg',
  templateUrl: './sign-in-svg.component.html',
  styleUrls: ['./sign-in-svg.component.scss'],
})
export class SignInSvgComponent {
  innerHtml: string | undefined;
  constructor(private http: HttpClient) {
    this.http
      .get('/assets/svg/sign-in.svg', { responseType: 'text' })
      .subscribe((e: any) => {
        this.innerHtml = e;
      });
  }
}
