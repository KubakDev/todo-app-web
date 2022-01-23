import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/home/header/header.component';
import { CalenderComponent } from './components/home/calender/calender.component';
import { TodayTasksComponent } from './components/home/today-tasks/today-tasks.component';
import { CreateTaskComponent } from './components/home/create-task/create-task.component';
import { SettingComponent } from './components/setting/setting.component';
import { TaskComponent } from './components/home/today-tasks/task/task.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ApiModule } from './backend/api.module';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    HeaderComponent,
    CalenderComponent,
    TodayTasksComponent,
    CreateTaskComponent,
    AppComponent,
    SideNavComponent,
    ErrorPageComponent,
    ProfileComponent,
    ToggleComponent,
    SignInComponent,
    SettingComponent,
    TaskComponent,
    ToggleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-lmrxa-v2.eu.auth0.com',
      clientId: 'wnMlcJ2Cy414JOsjMLPjNTVEVpiFExCV',
      audience: 'http://localhost:5000',
      useRefreshTokens: true,
    }),
    ApiModule.forRoot({ rootUrl: '/api' }),
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
