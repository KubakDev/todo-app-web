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
     SignInComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    }],
  bootstrap: [AppComponent],
})
export class AppModule {}
