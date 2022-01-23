import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { ThemesService } from 'src/app/themes.service';

@Component({
  selector: 'app-sign-in-svg',
  templateUrl: './sign-in-svg.component.html',
  styleUrls: ['./sign-in-svg.component.scss'],
})
export class SignInSvgComponent {
  innerHtml: string | undefined;

  constructor(private http: HttpClient, private themeService: ThemesService) {
    this.themeService.themeName$
      .pipe(
        map((themeName) => {
          this.http
            .get(`/assets/svg/login/${themeName}.svg`, { responseType: 'text' })
            .subscribe((e: any) => {
              this.innerHtml = e;
            });
        })
      )
      .subscribe();
  }
}
